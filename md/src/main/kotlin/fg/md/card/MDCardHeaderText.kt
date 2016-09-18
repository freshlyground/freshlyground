package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class MDCardHeaderText : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardHeaderText : StyledClass {

        override val classSelector = "md-card-header-text".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            height = "40px"
            margin = "0 8px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}