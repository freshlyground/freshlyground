package fg.beans

import fg.base.URL
import fg.beans.action.Action
import fg.beans.action.ActionBean
import fg.beans.button.ToggleButton
import fg.beans.drawer.Drawer
import fg.beans.menu.Menu
import fg.beans.menu.MenuBar
import fg.elements.BODY
import fg.elements.HTML
import fg.elements.layout.Layout
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
            _style.textAlign = "center"

            menu("Components") {
                menuItem(Action("Button", shortcut = Key.from("ctrl+b")) { window.location.href = currUrl.replaceParam("page", "Button").toString() }) {}
                menuItem(Action(ToggleButton::class.js.name, shortcut = Key.from("ctrl+t")) { window.location.href = currUrl.replaceParam("page", ToggleButton::class.js.name).toString() }) {}
                menuItem(Action(Menu::class.js.name) { window.location.href = currUrl.replaceParam("page", Menu::class.js.name).toString() }) {}
                menuItem(Action(MenuBar::class.js.name, shortcut = Key.from("ctrl+m")) { window.location.href = currUrl.replaceParam("page", MenuBar::class.js.name).toString() }) {}
            }
            menu("Layout") {
                menuItem(Action(Drawer::class.js.name, shortcut = Key.from("ctrl+d"), perform = { window.location.href = currUrl.replaceParam("page", Drawer::class.js.name).toString() })) {}
                menuItem(Action(Layout::class.js.name, shortcut = Key.from("ctrl+l"), perform = { window.location.href = currUrl.replaceParam("page", Layout::class.js.name).toString() })) {}
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
        "Button" -> {
            buttonPage.start()
        }
        ToggleButton::class.js.name -> {
            toggeButtonPage.start()
        }
        MenuBar::class.js.name -> {
            menuBarPage.start()
        }
        Menu::class.js.name -> {
            menuPage.start()
        }
        Drawer::class.js.name -> {
            drawerPage.start()
        }
        Layout::class.js.name -> {
            layoutPage.start()
        }
    }

    HTML.init()
}

