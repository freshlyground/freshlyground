package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.md.colour.MDGrayPalette
import fg.style.ClassRule

class MDCardSubtitle : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardSubtitle : StyledClass {

        override val classSelector = "md-card-subtitle".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _fontSize = "14px"
            _fontWeight = "400"

            _color = MDGrayPalette.p600.toHtml()
        }

        init {
            HTML.registerStyle(this)
        }
    }
}