package fg.beans.menu

import fg.beans.SelectableAction
import fg.beans.button.ToggleButton
import fg.beans.pkg
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.and
import fg.style.focus

class MenuButton(action: SelectableAction) : ToggleButton(action) {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MenuButton : StyledClass {

        override val classSelector = "${pkg}-menu-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            borderColor = "#e4e4e4"
            borderRadius = "0"

            focus {
                borderColor = "#e4e4e4"
            }

            and(".selected") {
                borderBottom = "none"
                borderColor = "#e4e4e4"
                backgroundColor = "rgb(118, 178, 240)"
                boxShadow = "none"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}