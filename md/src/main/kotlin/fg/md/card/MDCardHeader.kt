package fg.md.card

import fg.elements.Div
import fg.elements.toClassSelector
import fg.elements.toSelector
import fg.style.child
import fg.style.classStyle
import fg.style.desc
import fg.style.not

class MDCardHeader : Div() {

    override val styleClassName = "md-card-header".toClassSelector()

    override val styleClass = classStyle {

        display = "flex"
        flexDirection = "row"
        height = "40px"
        margin = "-8px 0 16px 0"

        desc(MDCardTitle.styleClassName) {
            fontSize = "14px"
        }

        desc(MDCardSubtitle.styleClassName) {
            not(":first-child".toSelector()) {
                marginTop = "-8px"
            }
        }
    }
}