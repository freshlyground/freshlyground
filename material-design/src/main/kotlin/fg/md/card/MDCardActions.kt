package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class MDCardActions : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardActions : StyledClass {

        override val classSelector = "md-card-actions".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _padding = "8px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}