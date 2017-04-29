package fg.examples.seedsavers.support.repository

import fg.query.Query
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.js.Json

open class LocalRepoStorage(val repoKeyPrefix: String) {

    fun save(key: String, string: String) {

        kotlin.browser.window.localStorage[repoKeyPrefix + key] = string
    }

    fun deleteById(id: String) {
        kotlin.browser.window.localStorage.removeItem(id)
    }

    fun getById(id: String): String? {

        return kotlin.browser.window.localStorage[id]
    }

    fun <T> getById(id: String, mapper: ((String) -> T)? = null): T? {

        val string: String? = kotlin.browser.window.localStorage[id]
        if (mapper != null) {
            if (string != null) {
                try {
                    return mapper.invoke(string)
                } catch(e: Exception) {
                    console.error(e)
                    return null
                }
            } else {
                return null
            }
        } else {
            return string as T?
        }
    }

    fun getAll(): List<String> {
        return getAll(null)
    }

    fun <T> getAll(mapper: ((String) -> T)? = null): List<T> {

        val list: MutableList<T> = arrayListOf()
        val size = kotlin.browser.window.localStorage.length

        for (i in 0..size) {
            val key = kotlin.browser.window.localStorage.key(i)
            key?.run {
                if (this.startsWith(repoKeyPrefix)) {
                    val value: String? = kotlin.browser.window.localStorage[this]
                    value?.run {
                        if (mapper != null) {
                            try {
                                list.add(mapper.invoke(this))
                            } catch(e: Exception) {
                                console.log(e)
                            }
                        } else {
                            list.add(this as T)
                        }
                    }
                }
            }
        }
        return list
    }

    fun <T> query(query: Query, mapper: ((String) -> T)? = null): List<T> {

        val list: MutableList<T> = arrayListOf()
        val size = kotlin.browser.window.localStorage.length

        for (i in 0..size) {
            val key = kotlin.browser.window.localStorage.key(i)
            key?.run {
                if (this.startsWith(repoKeyPrefix)) {
                    val value: String? = kotlin.browser.window.localStorage[this]
                    value?.run {
                        if (mapper != null) {
                            try {
                                val element = mapper.invoke(this)
                                if( query.constraint != null ) {
                                    list.add(element)
                                }
                                else {
                                    list.add(element)
                                }

                            } catch(e: Exception) {
                                console.log(e)
                            }
                        } else {
                            list.add(this as T)
                        }
                    }
                }
            }
        }
        return list
    }

    companion object {

        val jsonParser: (String) -> Json = {
            string ->
            JSON.parse(string)
        }
    }

}