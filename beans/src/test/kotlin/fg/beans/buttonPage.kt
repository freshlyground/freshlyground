package fg.beans

import fg.beans.action.Action
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
                button(Action("Button 1") { console.log(it) }) {}
                button(Action("Button 2") { console.log(it) }) {}
            }
            p {
                button(Action("Button, disabled", enabled = false) {}) {}
            }
        }

    }
}

