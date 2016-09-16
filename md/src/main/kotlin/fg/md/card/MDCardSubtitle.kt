package fg.md.card

import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.H1
import fg.md.colour.MDGrayPalette
import fg.style.classStyle

class MDCardSubtitle : Div() {

    override val styleClassName = Statics.styleClassName

    override val styleClass = classStyle {
        fontSize = "14px"
        fontWeight = "400"
        marginBottom = "16px"

        color = MDGrayPalette.s600.toHtml()
    }

    override fun render() {
        super.render()

        addClass()
    }

    companion object Statics {
        val styleClassName: ClassSelector = ClassSelector("md-card-subtitle")
    }
}