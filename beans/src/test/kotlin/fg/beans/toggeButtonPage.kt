package fg.beans

import fg.beans.action.SelectableAction
import fg.beans.icon.FontAwesomeIcons
import fg.elements.BODY
import fg.elements.h1
import fg.elements.p
import fg.elements.with

object toggeButtonPage {

    fun start() {


        BODY with {

            h1 {
                +"ToggleButton"
            }
            p {
                toggleButton(SelectableAction("ToggleButton 1") {}) {}
                toggleButton(SelectableAction("ToggleButton 2") {}) {}
                toggleButton(SelectableAction(
                        selectedIcon = FontAwesomeIcons.toggle_on(),
                        deselectedIcon = FontAwesomeIcons.toggle_off()) {}) {}
            }
            p {
                toggleButton(SelectableAction("ToggleButton, disabled", enabled = false) {}) {}
            }
        }

    }
}

