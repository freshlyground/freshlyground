package fg.examples.seedsavers

import fg.examples.seedsavers.SeedSaversApp

fun main(vararg args: String) {

    PlantCatalogue.register(Plant("Timotei"))
    PlantCatalogue.register(Plant("Blåklokke"))

    SeedSaversApp.start()
}