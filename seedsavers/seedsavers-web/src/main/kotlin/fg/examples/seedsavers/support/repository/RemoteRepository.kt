package fg.examples.seedsavers.support.repository

import fg.base.Path
import fg.base.http.send
import fg.query.Query
import fg.query.QueryResult
import fg.query.toJson
import fg.query.toQueryResult
import org.w3c.xhr.XMLHttpRequest
import kotlin.js.Json

open class RemoteRepository<out T : Any>(
        val resourceUrl: Path,
        val objectMapper: (Json) -> T
) {

    suspend fun getById(id: Any): T {

        val request = XMLHttpRequest()
        request.open("GET", "$resourceUrl/$id")

        val response: Json = send(request).run {
            JSON.parse(this)
        }

        return objectMapper.invoke(response)
    }

    suspend fun getByIdAsJson(id: Any): Json {

        val request = XMLHttpRequest()
        request.open("GET", "$resourceUrl/$id")

        val response: Json = send(request).run {
            JSON.parse(this)
        }

        return response
    }

    suspend fun getAll(): List<T> {

        val request = XMLHttpRequest()
        request.open("GET", "$resourceUrl/all")

        val response: Array<Json> = send(request).run {
            JSON.parse(this)
        }

        val list = arrayListOf<T>()
        response.forEach { list.add(objectMapper.invoke(it)) }
        return list
    }

    suspend fun getAllAsJson(): List<Json> {

        val request = XMLHttpRequest()
        request.open("GET", "$resourceUrl/all")

        val response: Array<Json> = send(request).run {
            JSON.parse(this)
        }
        return response.toList()
    }

    suspend fun query(query: Query): QueryResult<T> {

        val request = XMLHttpRequest()
        request.open("POST", "$resourceUrl/query")
        request.setRequestHeader("Accept", "application/json")
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        val jsonString = JSON.stringify(query.toJson())
        val response: Json = send(request, jsonString).run {
            JSON.parse(this)
        }
        return response.toQueryResult(objectMapper)
    }
}