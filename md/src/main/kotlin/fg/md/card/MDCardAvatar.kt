package fg.md.card

import fg.elements.Img
import fg.elements.percent
import fg.elements.toClassSelector
import fg.style.classStyle

class MDCardAvatar(src: String) : Img(src = src) {

    override val styleClassName = "md-card-avatar".toClassSelector()

    override val styleClass = classStyle {

        width = "40px"
        height = "40px"
        borderRadius = "50%"
    }
}