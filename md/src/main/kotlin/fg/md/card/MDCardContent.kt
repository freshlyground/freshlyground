package fg.md.card

import fg.elements.Div
import fg.elements.Selector
import fg.elements.toClassSelector
import fg.style.ClassStyle
import fg.style.child
import fg.style.classStyle
import fg.style.firstChild

open class MDCardContent : Div() {

    override val styleClassName = "md-card-content".toClassSelector()

    override val styleClass: ClassStyle? = classStyle {
        fontSize = "14px"

        child(Selector.ANY) {
            firstChild {
                marginTop = "0"
            }
        }
    }

    override fun render() {
        super.render()

        addClass()
    }
}
