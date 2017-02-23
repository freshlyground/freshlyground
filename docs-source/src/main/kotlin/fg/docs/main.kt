package fg.docs

import fg.beans.action.Action
import fg.beans.action.SelectableAction
import fg.beans.button
import fg.beans.icon.FontAwesomeIcons
import fg.beans.menu
import fg.beans.menu.Menu
import fg.beans.menu.MenuItem
import fg.beans.menuItem
import fg.elements.BODY
import fg.elements.HTML
import fg.elements.a
import fg.elements.h1
import fg.elements.h2
import fg.elements.h3
import fg.elements.header
import fg.elements.li
import fg.elements.p
import fg.elements.pre
import fg.elements.ul
import fg.elements.with
import fg.style.AnyRule
import fg.style.ClassRule
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
        h2 {
            +"Elements"
        }
        p {
            a("api/elements/index.html", "_blank") {
                +"API"
            }
        }
        h2 {
            +"Beans"
        }
        p {
            a("api/beans/index.html", "_blank") {
                +"API"
            }
        }
        h3 {
            +"Menu"
        }
        p {
            menu {
                menuItem(SelectableAction("Menu Item 1") {}) {}
                menuItem(SelectableAction("Menu Item 2") {}) {}
            }
        }
        h3 {
            +"Button"
        }
        p {
            button(Action("Button 1") {}) {

            }
            button(Action(icon = FontAwesomeIcons.camera_retro()) {}) {

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

    HTML.addCSSRule(AnyRule() with {
        _boxSizing = "border-box"
    })
    HTML.addCSSRule(ClassRule(Menu.classSelector) with {

        desc(MenuItem.classSelector) {

            and(SelectableAction.selectedSelector) {
                _borderBottom = "1px solid red"
            }
        }
    })
    HTML.addCSSRule(ClassRule(MenuItem.classSelector) with {
        hover {
            _backgroundColor = "lightgrey"
        }
    })

    HTML.init()
}

