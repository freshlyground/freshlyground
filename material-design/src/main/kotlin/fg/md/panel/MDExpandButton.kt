package fg.md.panel

import fg.beans.action.SelectableAction
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.md.button.MDToggleButton
import fg.style.ClassRule

class MDExpandButton(action: SelectableAction) :
        MDToggleButton(action) {

    override fun render() {
        super.render()

        addClass(classSelector)
        _tabindex = "-1"
    }

    companion object MDExpandButton : StyledClass {

        override val classSelector = "$pkg-expand-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            paddingLeft = "16px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}

