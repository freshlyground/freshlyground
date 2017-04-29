package fg.examples.seedsavers.plant

import fg.query.Query

object PlantCatalogue {

    private val plantsRepo = PlantRepository()

    fun register(plant: Plant) {
        plantsRepo.save(plant)
    }

    suspend fun getAll(): List<Plant> {
        return plantsRepo.query(Query()).list
    }

}