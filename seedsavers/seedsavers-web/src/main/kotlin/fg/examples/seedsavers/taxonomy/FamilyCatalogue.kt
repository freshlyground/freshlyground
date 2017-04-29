package fg.examples.seedsavers.taxonomy

import fg.examples.seedsavers.plant.Plant
import fg.examples.seedsavers.plant.PlantRepository

object FamilyCatalogue {

    private val plantsRepo = PlantRepository()

    fun register(plant: Plant) {
        plantsRepo.save(plant)
    }

    /*fun getAll(): List<Plant> {
        return plantsRepo.getAll()
    }*/

}