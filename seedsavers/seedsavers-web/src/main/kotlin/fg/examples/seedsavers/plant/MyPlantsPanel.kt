package fg.examples.seedsavers.plant

import fg.base.experimental.coroutines.launch
import fg.elements.Text
import fg.elements.render

class MyPlantsPanel : fg.elements.Div() {

    override fun render() {
        super.render()

        launch(this) {
            appendChild(Text("My plants"))

            renderPlants()
        }
    }

    suspend private fun renderPlants() {

        for (plant in PlantCatalogue.getAll()) {
            val p = fg.elements.P() render {
                +"${plant.latinName} - ${plant.localNames}"
            }
            appendChild(p)
        }
    }
}