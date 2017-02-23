package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.Selector
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.child

class MDCardHeaderText : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardHeaderText : StyledClass {

        override val classSelector = "md-card-header-text".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            _display = "flex"
            _flexDirection = "column"

            child(MDCardTitle.classSelector) {
                _padding = "0"
                _fontSize = "14px"
                _fontWeight = "500"
            }

            child(Selector.ANY) {
                _flex = "1"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}