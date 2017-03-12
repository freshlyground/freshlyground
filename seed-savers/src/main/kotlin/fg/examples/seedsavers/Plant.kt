package fg.examples.seedsavers

import kotlin.js.Json
import kotlin.js.json

class Plant(val name: String) {

    fun toJson(): Json {
        val json = json()
        json["name"] = name
        return json
    }

    companion object Statics {

        fun from(json: Json): Plant {
            val name = json["name"] as String
            return Plant(name = name)
        }
    }
}