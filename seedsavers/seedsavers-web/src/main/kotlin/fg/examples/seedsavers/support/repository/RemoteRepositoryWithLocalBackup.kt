package fg.examples.seedsavers.support.repository

import fg.base.Path
import fg.base.http.NotFoundException
import fg.query.Query
import fg.query.QueryResult
import kotlin.js.Json

open class RemoteRepositoryWithLocalBackup<out T : Any, TID : Any>(
        localRepoKeyPrefix: String,
        val idToString: (TID) -> String = { it.toString() },
        val jsonToId: (Json) -> TID,
        val objectMapper: (Json) -> T,
        val remoteResource: Path) {

    private val localRepoStorage: LocalRepoStorage by lazy {
        LocalRepoStorage(localRepoKeyPrefix)
    }

    private val remoteRepository: RemoteRepository<T> by lazy {
        RemoteRepository(
                resourceUrl = remoteResource,
                objectMapper = objectMapper
        )
    }

    internal fun doSave(key: String, json: Json) {

        localRepoStorage.save(key, JSON.stringify(json))
    }

    suspend open fun getById(id: TID): T {
        try {
            val json = remoteRepository.getByIdAsJson(id)
            localRepoStorage.save(idToString(id), JSON.stringify(json))
            return objectMapper(json)
        } catch(e: NotFoundException) {

            try {
                return localRepoStorage.getById(
                        id = idToString(id),
                        mapper = { string ->
                            remoteRepository.objectMapper(JSON.parse(string))
                        }
                ) ?: throw NotFoundRemoteOrLocallyException("object with $id not found remote or locally")
            } catch(e: Exception) {
                throw RepositoryLocalFallbackException(e)
            }
        }
    }

    suspend open fun query(query: Query): QueryResult<T> {

        return remoteRepository.query(query)
    }

    suspend open fun getAll(): List<T> {

        try {
            val allAsJson = remoteRepository.getAllAsJson()
            allAsJson.forEach {
                doSave(idToString(jsonToId(it)), it)
            }
            return allAsJson.map { objectMapper(it) }
        } catch (e: NotFoundException) {

            val list: List<kotlin.js.Json> = localRepoStorage.getAll(LocalRepoStorage.Companion.jsonParser)
            val mapped: MutableList<T> = arrayListOf()
            try {

                for (json in list) {
                    try {
                        mapped.add(objectMapper(json))
                    } catch(e: Exception) {
                        console.error(e)
                        localRepoStorage.deleteById(idToString(jsonToId(json)))
                    }
                }

            } catch(e: Exception) {
                throw RepositoryLocalFallbackException(e)
            }
            return mapped
        }
    }


}