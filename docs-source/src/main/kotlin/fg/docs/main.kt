package fg.docs

import fg.beans.Action
import fg.beans.SelectableAction
import fg.beans.button
import fg.beans.icon.FontAwesomeIcons
import fg.beans.menu
import fg.beans.menu.Menu
import fg.beans.menu.MenuItem
import fg.beans.menuItem
import fg.elements.BODY
import fg.elements.HTML
import fg.elements.Selector
import fg.elements.a
import fg.elements.h1
import fg.elements.h2
import fg.elements.header
import fg.elements.li
import fg.elements.p
import fg.elements.pre
import fg.elements.ul
import fg.elements.with
import fg.style.Style
import fg.style.and
import fg.style.desc
import fg.style.hover


fun main(vararg args: String) {

    BODY with {

        header {
            h1 {
                +"Freshlyground"
            }
            p {
                +"A web framework for programming rich web clients with Kotlin"
            }
        }
        h2 {
            +"Domain-specific language"
        }
        pre {
            +"fun main(vararg args: String) {\n"
            +"  \n"
            +"  BODY with {\n"
            +"  \n"
            +"      header {\n"
            +"          h1 {\n"
            +"              +\"Freshlyground\"\n"
            +"          }\n"
            +"          p {\n"
            +"              +\"A web framework for programming rich web clients with Kotlin\"\n"
            +"          }\n"
            +"      }\n"
            +"  }\n"
            +"  \n"
            +"  HTML.init()\n"
            +"}\n"
        }
        menu {
            menuItem(SelectableAction("Menu Item 1")) {}
            menuItem(SelectableAction("Menu Item 2")) {}
        }
        p {
            button(Action("Button 1")) {

            }
            button(Action(icon = FontAwesomeIcons.camera_retro())) {

            }
        }
        h2 {
            +"Resources"
        }
        ul {
            li {
                a("https://kotlinlang.org/", "_blank") {
                    +"https://kotlinlang.org/"
                }
            }
            li {
                a("https://www.w3.org/TR/html5/", "_blank") {
                    +"https://www.w3.org/TR/html5/"
                }
            }
            li {
                a("http://html5doctor.com/", "_blank") {
                    +"http://html5doctor.com/"
                }
            }
            li {
                a("https://developer.mozilla.org", "_blank") {
                    +"https://developer.mozilla.org"
                }
            }
        }
    }

    HTML.registerStyle(Style(Selector.ANY) with {
        boxSizing = "border-box"
    })
    HTML.registerStyle(Style(Menu.selector) with {
        desc(MenuItem.selector) {
            and(SelectableAction.selectedSelector) {
                borderBottom = "1px solid red"
            }
        }
    })
    HTML.registerStyle(Style(MenuItem.selector) with {
        hover {
            backgroundColor = "lightgrey"
        }
    })

    HTML.init()
}

