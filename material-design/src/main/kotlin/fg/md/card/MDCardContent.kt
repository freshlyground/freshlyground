package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.Selector
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.child
import fg.style.firstChild

open class MDCardContent : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object Statics : StyledClass {

        override val classSelector = "md-card-content".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _fontSize = "14px"
            _padding = "16px"

            child(Selector.ANY) {
                firstChild {
                    _marginTop = "0"
                }
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}
