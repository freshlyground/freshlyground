package fg.md.card

import fg.elements.ClassSelector
import fg.elements.Div
import fg.style.classStyle

class MDCardTitle : Div() {

    override val styleClassName = Statics.styleClassName

    override val styleClass = classStyle {
        fontSize = "24px"
        fontWeight = "400"
        marginTop = "0"
        marginBottom = "16px"
    }

    override fun render() {
        super.render()

        addClass()
    }

    companion object Statics {
        val styleClassName: ClassSelector = ClassSelector("md-card-title")
    }
}