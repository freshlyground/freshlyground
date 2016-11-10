package fg.md.panel

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class MDExpandedPanel : Div() {

    companion object MDExpandedPanel : StyledClass {

        override val classSelector = "md-expanded-panel".toClassSelector()

        override val rule: ClassRule.() -> Unit = {


        }

        init {
            HTML.registerStyle(this)
        }
    }
}