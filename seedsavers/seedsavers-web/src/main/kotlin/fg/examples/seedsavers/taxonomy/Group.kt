package fg.examples.seedsavers.taxonomy

import fg.examples.seedsavers.Translation
import kotlin.js.Json
import kotlin.js.json

sealed class Group(val name: String, val translations: List<Translation>) {

    fun toJson(): Json {
        val json = json()
        json["name"] = name
        json["translations"] = translations.map(Translation::toJson).toTypedArray()
        return json
    }

    // Familie
    class Family(name: String, vararg translations: Translation) : Group(name = name,
            translations = translations.toList()) {

        companion object Statics {

            fun from(json: Json): Family {
                val translationsJson = json["translations"] as Array<Json>
                val translations = translationsJson.map { Translation.from(it) }.toList()
                return Family(name = json["name"] as String,
                        translations = *translations.toTypedArray())
            }
        }
    }


    // Slekt
    class Genus(name: String, vararg translations: Translation) : Group(name = name,
            translations = translations.toList()) {

    }

    // Art
    class Species(name: String, vararg translations: Translation) : Group(name = name,
            translations = translations.toList()) {

    }
}