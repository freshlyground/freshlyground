package fg.beans

import fg.base.URL
import fg.beans.button.Button
import fg.beans.button.ToggleButton
import fg.beans.drawer.Drawer
import fg.beans.menu.MenuBar
import fg.elements.BODY
import fg.elements.HTML
import fg.elements.with
import fg.keyboard.Key
import fg.keyboard.KeyBinding
import fg.keyboard.Keyboard
import fg.keyboard.Keys
import kotlin.browser.window

fun main(vararg args: String) {

    val currUrl = URL.from(window.location.href)
    console.log("currUrl: " + currUrl.toString())


    BODY with {

        menuBar {
            style.textAlign = "center"

            menu("Components") {
                menuItem(Action("Button", shortcut = Key.from("meta+b")) { window.location.href = currUrl.replaceParam("page", "Button").toString() }) {}
                menuItem(Action("ToggleButton", shortcut = Key.from("meta+t")) { window.location.href = currUrl.replaceParam("page", "ToggleButton").toString() }) {}
                menuItem(Action("MenuBar", shortcut = Key.from("meta+m")) { window.location.href = currUrl.replaceParam("page", "MenuBar").toString() }) {}
            }
            menu("Layout") {
                menuItem(Action("Drawer", shortcut = Key.from("meta+d"), perform = { window.location.href = currUrl.replaceParam("page", "Drawer").toString() })) {}
            }
        }

    }

    BODY.traverseElements {
        if (it is ActionBean && it.action.shortcut != null) {
            Keyboard.DOCUMENT.
                    add(KeyBinding(Keys.from(it.action.shortcut!!),
                            callback = { it.action.perform(it) }))
        }
        true
    }

    val page = currUrl.query.map["page"]
    when (page) {
        Button.jsClass.name -> {
            mainButton.start()
        }
        ToggleButton.jsClass.name -> {
            mainToggleButton.start()
        }
        MenuBar.jsClass.name -> {
            mainMenuBar.start()
        }
        Drawer.jsClass.name -> {
            mainDrawer.start()
        }
    }

    HTML.init()
}

