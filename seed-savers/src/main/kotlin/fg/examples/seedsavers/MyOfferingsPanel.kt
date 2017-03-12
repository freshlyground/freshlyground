package fg.examples.seedsavers

import fg.elements.Div
import fg.elements.Text

class MyOfferingsPanel : Div() {

    override fun render() {
        super.render()

        appendChild(Text("My offerings"))
    }
}