package fg.beans

import fg.base.Side
import fg.beans.action.Action
import fg.beans.action.ActionPerform
import fg.beans.action.SelectableAction
import fg.beans.drawer.dock
import fg.beans.drawer.undock
import fg.elements.BODY
import fg.elements.P
import fg.elements.h1
import fg.elements.p
import fg.elements.with
import fg.keyboard.Key

object drawerPage {

    fun start() {

        val lastShortDisplay = P() with {
            _style.textAlign = "right"
        }

        val handleMenuItemAction: (ActionPerform) -> Unit = { (action) ->
            lastShortDisplay.textContent = action.shortcut.toString()
        }

        BODY with {
            val leftDrawer = drawer(Side.LEFT) {

                hide()
                _style.borderRight = "1px solid black"

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
            val rightDrawer = drawer(Side.RIGHT) {

                hide()
                _style.borderLeft = "1px solid black"

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
                _style.textAlign = "center"

                button(Action("Dock drawer") { BODY.dock(leftDrawer); BODY.dock(rightDrawer) }) {

                }
                button(Action("UnDock drawer") { leftDrawer.undock(); rightDrawer.undock() }) {

                }
                button(Action("Show drawer") {
                    leftDrawer.show()
                    rightDrawer.show()
                }) {

                }
                button(Action("Hide drawer") {
                    leftDrawer.hide()
                    rightDrawer.hide()
                }) {

                }
            }
        }

        BODY.appendChild(lastShortDisplay)
    }
}

