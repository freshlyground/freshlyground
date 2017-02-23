package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.elements.toSelector
import fg.style.ClassRule
import fg.style.child
import fg.style.not

class MDCardTitleText : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardHeaderText : StyledClass {

        override val classSelector = "md-card-title-text".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _paddingTop = "24px"
            _paddingLeft = "16px"
            _paddingRight = "16px"
            _paddingBottom = "16px"

            child(MDCardTitle.classSelector) {
                _padding = "0"

                not(":first-child".toSelector()) {
                    _paddingTop = "12px"
                }
            }

            child(MDCardSubtitle.classSelector) {
                not(":first-child".toSelector()) {
                    _paddingTop = "12px"
                }
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}