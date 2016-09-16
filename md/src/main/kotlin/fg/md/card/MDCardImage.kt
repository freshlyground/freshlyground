package fg.md.card

import fg.elements.Img
import fg.elements.toClassSelector
import fg.style.classStyle

class MDCardImage(src: String) : Img(src = src) {

    override val styleClassName = "md-card-image".toClassSelector()

    override val styleClass = classStyle {
        width = "calc(100% + 48px)"
        margin = "0 -24px 16px -24px"
    }
}