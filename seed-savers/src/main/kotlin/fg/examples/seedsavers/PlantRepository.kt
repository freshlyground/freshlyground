package fg.examples.seedsavers

class PlantRepository : Repository("PLANT#") {

    fun save(plant: Plant) {
        doSave(plant.name, plant.toJson())
    }

    fun getAll(): List<Plant> {
        return doGetAll().map { Plant.from(it) }
    }

}