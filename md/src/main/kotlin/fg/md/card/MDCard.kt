package fg.md.card

import fg.elements.toClassSelector
import fg.style.ClassStyle
import fg.style.classStyle

open class MDCard : fg.elements.Div() {

    override val styleClassName = "md-card".toClassSelector()

    override val styleClass: ClassStyle? = classStyle {
        display = "block"
        position = "relative"
        padding = "24px"
        borderRadius = "2px"
        boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
        fontFamily = "Roboto, 'Helvetica Neue', sans-serif"
        background = "white"
    }


    override fun render() {
        super.render()

        addClass()
    }

}

