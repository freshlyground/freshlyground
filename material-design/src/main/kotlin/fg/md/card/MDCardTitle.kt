package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class MDCardTitle : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardTitle : StyledClass {

        override val classSelector = "md-card-title".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            fontSize = "24px"
            fontWeight = "400"
            marginTop = "0"
            marginBottom = "16px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}