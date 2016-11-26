package fg.beans

import fg.elements.BODY
import fg.elements.h1
import fg.elements.p
import fg.elements.with

object buttonPage {

    fun start() {

        BODY with {

            h1 {
                +"Button"
            }
            p {
                button(Action("Button 1") {}) {}
                button(Action("Button 2") {}) {}
            }
            p {
                button(Action("Button, disabled", enabled = false) {}) {}
            }
        }

    }
}

