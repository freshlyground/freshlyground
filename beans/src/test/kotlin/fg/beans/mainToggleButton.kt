package fg.beans

import fg.elements.BODY
import fg.elements.h1
import fg.elements.p
import fg.elements.with

object mainToggleButton {

    fun start() {


        BODY with {

            h1 {
                +"ToggleButton"
            }
            p {
                toggleButton(SelectableAction("ToggleButton 1") {}) {}
                toggleButton(SelectableAction("ToggleButton 2") {}) {}
            }
            p {
                toggleButton(SelectableAction("ToggleButton, disabled", enabled = false) {}) {}
            }
        }

    }
}

