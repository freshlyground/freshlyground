package fg.examples.seedsavers

import fg.elements.Div
import fg.elements.P
import fg.elements.Text
import fg.elements.render
import fg.examples.seedsavers.plant.PlantCatalogue

class TaxonomyPanel: Div() {

    override fun render() {
        super.render()

        appendChild(Text("My plants"))

        //renderPlants()
    }

    suspend private fun renderPlants() {

        for (plant in PlantCatalogue.getAll()) {
            val p = P() render {
                +plant.latinName
            }
            appendChild(p)
        }
    }
}