package fg.beans.menu

import fg.beans.action.SelectableAction
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

            _borderColor = "#e4e4e4"
            _borderRadius = "0"

            focus {
                _borderColor = "#e4e4e4"
            }

            and(".selected") {
                _borderBottom = "none"
                _borderColor = "#e4e4e4"
                _backgroundColor = "rgb(118, 178, 240)"
                _boxShadow = "none"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}