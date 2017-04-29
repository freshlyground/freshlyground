package fg.examples.seedsavers

import kotlin.js.Json
import kotlin.js.json

class Translation(val lang: Language, val value: String) {

    fun toJson(): Json {
        val json = json()
        json["lang"] = lang.code
        json["value"] = value
        return json
    }

    companion object Statics {

        fun from(json: Json): Translation {
            return Translation(
                    lang = Language.valueOf(json["lang"] as String),
                    value = json["value"] as String)
        }
    }
}