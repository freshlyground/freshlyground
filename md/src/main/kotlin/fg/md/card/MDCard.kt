package fg.md.card

import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

open class MDCard : fg.elements.Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCard : StyledClass {

        override val classSelector = "md-card".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            display = "block"
            position = "relative"
            padding = "24px"
            borderRadius = "2px"
            boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
            fontFamily = "Roboto, 'Helvetica Neue', sans-serif"
            background = "white"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}

