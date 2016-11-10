package fg.md.panel

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class MDCollapsedPanel : Div() {

    companion object MDCollapsedPanel : StyledClass {

        override val classSelector = "md-collapsed-panel".toClassSelector()

        override val rule: ClassRule.() -> Unit = {


        }

        init {
            HTML.registerStyle(this)
        }
    }
}