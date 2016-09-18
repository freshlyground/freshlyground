package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.elements.toSelector
import fg.style.ClassRule
import fg.style.desc
import fg.style.not

class MDCardHeader : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardHeader : StyledClass {

        override val classSelector = "md-card-header".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            display = "flex"
            flexDirection = "row"
            height = "40px"
            margin = "-8px 0 16px 0"

            desc(MDCardTitle.classSelector) {
                fontSize = "14px"
            }

            desc(MDCardSubtitle.classSelector) {
                not(":first-child".toSelector()) {
                    marginTop = "-8px"
                }
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}