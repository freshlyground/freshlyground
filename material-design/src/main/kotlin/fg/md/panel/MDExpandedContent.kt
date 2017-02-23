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

            _paddingTop = "16px"
            _paddingLeft = "16px"
            _paddingRight = "16px"
            _paddingBottom = "16px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}