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
            _fontSize = "24px"
            _fontWeight = "400"

            _paddingTop = "24px"
            _paddingBottom = "16px"
            _paddingLeft = "16px"
            _paddingRight = "16px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}