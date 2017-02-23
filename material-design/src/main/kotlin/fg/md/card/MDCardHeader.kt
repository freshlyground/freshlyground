package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.elements.toSelector
import fg.style.ClassRule
import fg.style.child
import fg.style.not

class MDCardHeader : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardHeader : StyledClass {

        override val classSelector = "md-card-header".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _display = "flex"
            _flexDirection = "row"
            _padding = "16px"

            child(MDCardTitle.classSelector) {
                _fontSize = "14px"
            }

            child(MDCardAvatar.classSelector) {
                _marginRight = "12px"
            }

            child(MDCardSubtitle.classSelector) {
                not(":first-child".toSelector()) {
                    //marginTop = "-8px"
                }
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}