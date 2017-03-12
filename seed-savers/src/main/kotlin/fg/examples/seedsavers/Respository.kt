package fg.examples.seedsavers

import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.browser.window
import kotlin.js.Json

abstract class Repository(val repoKeyPrefix: String) {

    internal fun doSave(key: String, json: Json) {

        window.localStorage[APP_KEY_PREFIX + repoKeyPrefix + key] = JSON.stringify(json)
    }

    internal fun doGetAll(): List<Json> {
        val list: MutableList<Json> = arrayListOf()
        val size = window.localStorage.length
        for (i in 0..size) {
            val key = window.localStorage.key(i)
            key?.run {
                if (this.startsWith(APP_KEY_PREFIX + repoKeyPrefix)) {
                    val jsonString = window.localStorage[this]
                    jsonString?.run {
                        list.add(JSON.parse(this))
                    }
                }
            }
        }
        return list
    }

    companion object Statics {

        private val APP_KEY_PREFIX = "fg.seedsavers."
    }
}