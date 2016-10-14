package fg.beans

import fg.elements.BODY
import fg.elements.h1
import fg.elements.p
import fg.elements.with
import fg.keyboard.Key

object mainMenuBar {

    fun start() {

        BODY with {

            h1 {
                +"MenuBar"
            }
            p {
                menuBar {
                    menu("File") {
                        menuItem(Action("New") {}) {}
                        menuItem(Action("Open") {}) {}
                        menuItem(Action("Export") {}) {}
                        menuItem(Action("Close") {}) {}
                        menuItem(Action("Exit") {}) {}
                    }
                    menu("Edit") {
                        menuItem(Action("Undo", shortcut = Key.from("meta+z")) {}) {}
                        menuItem(Action("Redo", shortcut = Key.from("shift+meta+z")) {}) {}
                        menuItem(SelectableAction("Column Selection Mode", shortcut = Key.from("shift+meta+8")) {}) {}
                    }
                }
            }
        }
    }
}

