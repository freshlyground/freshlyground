package fg.beans

import fg.base.Side
import fg.beans.drawer.dock
import fg.beans.drawer.undock
import fg.elements.BODY
import fg.elements.P
import fg.elements.h1
import fg.elements.p
import fg.elements.with
import fg.keyboard.Key

object mainDrawer {

    fun start() {

        val lastShortDisplay = P() with {
            style.textAlign = "right"
        }

        val handleMenuItemAction: (ActionPerform) -> Unit = { actionPerform ->
            lastShortDisplay.textContent = actionPerform.action.shortcut.toString()
        }

        BODY with {
            val leftDrawer = drawer(Side.LEFT) {

                hide()

                menu {
                    menuItem(SelectableAction("Menu Item 1", shortcut = Key.from("meta+alt+z"), perform = handleMenuItemAction)) {

                    }
                    menuItem(Action("Menu Item 2", shortcut = Key.from("meta+1"), perform = handleMenuItemAction)) {

                    }
                    menuItem(Action("Menu Item 3", shortcut = Key.from("meta+2"), perform = handleMenuItemAction)) {

                    }
                    menuItem(SelectableAction("Menu Item 4", shortcut = Key.from("meta+s"), perform = handleMenuItemAction)) {

                    }
                }
            }
            h1 {
                +"Drawer"
            }
            p {
                style.textAlign = "center"

                button(Action("Dock drawer") { BODY.dock(leftDrawer) }) {

                }
                button(Action("UnDock drawer") { leftDrawer.undock() }) {

                }
                button(Action("Show drawer") { leftDrawer.show() }) {

                }
                button(Action("Hide drawer") { leftDrawer.hide() }) {

                }
            }
        }

        BODY.appendChild(lastShortDisplay)
    }
}

