package fg.examples.seedsavers

import fg.query.and
import fg.query.eq
import fg.query.or
import fg.query.query
import kotlin.js.Json

val APP_KEY_PREFIX = "fg.seedsavers."

fun main(vararg args: String) {

    val query = query {
        constraint = ("balle" eq "rusk") and ("balle" eq "tusk") or ("balle" eq "slusk")
    }

    println("query: $query")

    SeedSaversApp.start()


}

data class Person(val name: String, val age: Int) {

    companion object {

        fun from(json: Json): Person {
            return Person(
                    name = json["name"] as String,
                    age = json["age"] as Int)
        }
    }
}