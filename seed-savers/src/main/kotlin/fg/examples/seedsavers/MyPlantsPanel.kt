package fg.examples.seedsavers

import fg.elements.Div
import fg.elements.P
import fg.elements.Text
import fg.elements.render

class MyPlantsPanel : Div() {

    override fun render() {
        super.render()

        appendChild(Text("My plants"))

        renderPlants()
    }

    private fun renderPlants() {

        for (plant in PlantCatalogue.getAll()) {
            val p = P() render {
                +plant.name
            }
            appendChild(p)
        }
    }
}