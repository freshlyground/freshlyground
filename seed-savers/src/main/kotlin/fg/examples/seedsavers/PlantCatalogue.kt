package fg.examples.seedsavers

object PlantCatalogue {

    private val plantsRepo = PlantRepository()

    fun register(plant: Plant) {
        plantsRepo.save(plant)
    }

    fun getAll(): List<Plant> {
        return plantsRepo.getAll()
    }

}