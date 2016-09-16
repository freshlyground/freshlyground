package fg.md.card

import fg.elements.Div
import fg.elements.toClassSelector
import fg.elements.toSelector
import fg.style.child
import fg.style.classStyle
import fg.style.not

class MDCardHeaderText : Div() {

    override val styleClassName = "md-card-header-text".toClassSelector()

    override val styleClass = classStyle {

        height = "40px"
        margin = "0 8px"
    }
}