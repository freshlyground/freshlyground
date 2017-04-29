package fg.examples.seedsavers.plant

import kotlin.js.Json
import kotlin.js.json

class Plant(val latinName: String,
            val localNames: List<String>) {

    fun toJson(): Json {
        val json = json()
        json[Plant::latinName.name] = latinName
        json[Plant::localNames.name] = localNames
        return json
    }

    companion object {

        val jsonToId: (Json) -> String = {
            it[Plant::latinName.name] as String
        }

        fun from(json: Json): Plant {
            val name = json[Plant::latinName.name] as String
            val localNames = json[Plant::localNames.name] as Array<String>
            return Plant(latinName = name, localNames = localNames.toList())
        }
    }
}