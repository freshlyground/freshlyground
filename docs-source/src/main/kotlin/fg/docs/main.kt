package fg.docs

import fg.base.Side
import fg.beans.action.Action
import fg.beans.action.SelectableAction
import fg.beans.button
import fg.beans.collapseOn
import fg.beans.drawer
import fg.beans.icon.FontAwesomeIcons
import fg.beans.menu
import fg.beans.menu.Menu
import fg.beans.menu.MenuItem
import fg.beans.menuItem
import fg.beans.toggleButton
import fg.elements.BODY
import fg.elements.Div
import fg.elements.HTML
import fg.elements.a
import fg.elements.div
import fg.elements.em
import fg.elements.h1
import fg.elements.h2
import fg.elements.h3
import fg.elements.header
import fg.elements.li
import fg.elements.p
import fg.elements.pre
import fg.elements.style.typed.Display
import fg.elements.style.typed.FlexDirection
import fg.elements.ul
import fg.elements.with
import fg.style.AnyRule
import fg.style.ClassRule
import fg.style.and
import fg.style.desc
import fg.style.hover
import kotlin.browser.window


fun main(vararg args: String) {

    val beansAction = SelectableAction("Beans") { window.location.href = "#Beans" }
    val beansContainer = Div() with {

        style.display = Display.flex
        style.flexDirection = FlexDirection.column
        style.paddingLeft = 3.em
        button(Action("Action") { window.location.href = "#Beans_Action" }) {}

        button(Action("Button") { window.location.href = "#Beans_Button" }) {}
    }
    beansContainer.collapseOn(beansAction)
    beansAction.selected = false

    BODY with {
        drawer(Side.RIGHT) {

            _style.borderLeft = "1px solid black"

            div {
                style.display = Display.flex
                style.flexDirection = FlexDirection.column

                button(Action("Elements") { window.location.href = "#Elements" }) {}
                toggleButton(beansAction) {}

                appendChild(beansContainer)

                button(Action("Material Design")) { }
                button(Action("Resources") { window.location.href = "#Resources" }) { }
            }
        }
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
            _id = "Elements"
            +"Elements"
        }
        p {
            a("api/elements/index.html", "_blank") {
                +"API"
            }
        }
        h2 {
            _id = "Beans"
            +"Beans"
        }
        h3 {
            _id = "Beans_Action"
            +"Action"
        }
        p {
            +"Actions are configurations of action components, like Button, ToggleButton, MenuItem. "
            + "This means these components are configured and changed through their actions and not directly."
        }
        p {
            +"One action can be used by more than one component, meaning all components created using the same action "
            +"will be changed upon changes on the action."
        }
        h3 {
            _id = "Beans_Button"
            +"Button"
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
            _id = "Resources"
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

