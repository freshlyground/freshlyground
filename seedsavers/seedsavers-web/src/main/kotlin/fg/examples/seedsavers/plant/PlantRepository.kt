package fg.examples.seedsavers.plant

import fg.base.Path
import fg.examples.seedsavers.APP_KEY_PREFIX
import fg.examples.seedsavers.support.repository.RemoteRepositoryWithLocalBackup

class PlantRepository :
        RemoteRepositoryWithLocalBackup<Plant, String>(
                localRepoKeyPrefix = APP_KEY_PREFIX + "PLANT#",
                jsonToId = Plant.jsonToId,
                objectMapper = Plant.Companion::from,
                remoteResource = Path.from("plant")
        ) {

    fun save(plant: Plant) {
        doSave(plant.latinName, plant.toJson())
    }

}