package fg.md.panel

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class MDExpandedContent : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDExpandedContent : StyledClass {

        override val classSelector = "$pkg-expanded-content".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            paddingTop = "16px"
            paddingLeft = "16px"
            paddingRight = "16px"
            paddingBottom = "16px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}