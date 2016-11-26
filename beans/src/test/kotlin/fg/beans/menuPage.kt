package fg.beans

import fg.elements.BODY
import fg.elements.h1
import fg.elements.p
import fg.elements.with

object menuPage {

    fun start() {

        BODY with {

            h1 {
                +"Menu"
            }
            p {
                menu("File") {

                    menuItem(Action("New") {}) {}
                    menuItem(Action("Open") {}) {}
                    menuItem(Action("Export", enabled = false) {}) {}
                    menuItem(SelectableAction("Selectable", selected = true) {}) {}
                    menuItem(Action("Close") {}) {}
                    menuItem(Action("Exit") {}) {}
                }
            }
        }
    }
}

