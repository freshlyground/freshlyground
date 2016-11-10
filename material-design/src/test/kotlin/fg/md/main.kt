package fg.md

import fg.base.Side
import fg.beans.Action
import fg.beans.SelectableAction
import fg.beans.button
import fg.beans.deck.Deck
import fg.beans.drawer.dock
import fg.elements.BODY
import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.HTML
import fg.elements.h1
import fg.elements.h2
import fg.elements.hr
import fg.elements.p
import fg.elements.with
import fg.keyboard.Key
import fg.md.button.MDButton
import fg.md.colour.MDColor
import fg.md.drawer.MDDrawer
import fg.style.AnyRule
import fg.style.ClassRule
import fg.style.colour.RgbColor
import fg.style.desc

class Main() {

    val leftDrawer: MDDrawer by lazy {
        MDDrawer(Side.LEFT) with {
            mdCard {
                mdMenu {
                    mdMenuItem(Action("Drawer") { deck.show(drawer) }) {}
                    mdMenuItem(Action("Button") { deck.show(button) }) {}
                    mdMenuItem(Action("Menu") { deck.show(menu) }) {}
                    mdMenuItem(Action("Card") { deck.show(card) }) {}
                    mdMenuItem(Action("ExpansionPanel") { deck.show(expansionPanel) }) {}
                }
            }
        }
    }

    val rightDrawer: MDDrawer by lazy {
        MDDrawer(Side.RIGHT) with {
            hide()
            _style.width = "250px"

            p { +"A Drawer on the right side" }
            mdCard {
                header {
                    avatar("portrait.jpg") {

                    }
                    text {
                        title {
                            +"Header title"
                        }
                        subtitle {
                            +"Header subtitle"
                        }
                    }
                }
                title {
                    +"Lion"
                }
                content {
                    +"The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae."
                }
            }
            val hideDrawerAction = Action("Hide drawer") {
                hide()
            }
            hr {}
            button(hideDrawerAction) {}
        }
    }

    val button: Div = Div() with {

        h2 {
            +"Button"
        }
        p {
            addClass("flex-row")
            p() {
                addClass("flex-column")
                mdButton(Action(label = "FLAT", perform = {}), MDButton.Type.FLAT) {}
                mdButton(Action(label = "CUSTOM STYLE", perform = {}), MDButton.Type.FLAT) {
                    flatStyle.backgroundColor = RgbColor(200, 200, 255)
                }
                mdButton(Action(label = "FLAT", enabled = false, perform = {}), MDButton.Type.FLAT) {}
            }
            p {
                addClass("flex-column")
                mdButton(Action(label = "RAISED", perform = {}), MDButton.Type.RAISED) {}
                mdButton(Action(label = "RAISED", enabled = false, perform = {}), MDButton.Type.RAISED) {}
            }
            p {
                addClass("flex-column")
                mdButton(Action(label = "ACCENT", perform = {}), MDButton.Type.FLOATING) {
                    color = MDColor.ACCENT
                }
                mdButton(Action(label = "ACCENT", enabled = false, perform = {}), MDButton.Type.FLOATING) {
                    color = MDColor.ACCENT
                }
                mdButton(Action(label = "PRIMARY", perform = {}), MDButton.Type.FLOATING) {
                    color = MDColor.PRIMARY
                }
                mdButton(Action(label = "PRIMARY", enabled = false, perform = {}), MDButton.Type.FLOATING) {
                    color = MDColor.PRIMARY
                }
            }
        }
    }

    val menu = Div() with {
        h2 {
            +"Menu"
        }
        p {
            mdMenu() {
                mdMenuItem(Action("Home") {}) {}
                mdMenuItem(Action("Back") {}) {}
                mdMenuItem(Action("Forward", enabled = false) {}) {}
                mdMenuItem(Action("Recently closed") {}) {}
                mdMenuItem(Action("Google") {}) {}
                mdMenuItem(Action("Youtube") {}) {}
            }
        }
        p {
            mdMenu() {
                mdMenuItem(Action("Undo", shortcut = Key.from("meta+z")) {}) {}
                mdMenuItem(Action("Redo", shortcut = Key.from("shift+meta+z")) {}) {}
                mdMenuItem(SelectableAction("Column Mode", shortcut = Key.from("shift+meta+8")) {}) {}
                mdMenuItem(SelectableAction("Some Mode", selected = true, shortcut = Key.from("shift+meta+1")) {}) {}
                mdMenuItem(SelectableAction("Other Mode", selected = true, shortcut = Key.from("shift+meta+2")) {}) {}
            }
        }
    }

    val radioButton = Div() with {
        h2 {
            +"Radio Button"
        }
        p {
            mdRadioButton("Some choice") {

            }
            mdRadioButton() {
                labelText = "Some other choice"
            }
        }
    }

    val card = Div() with {
        h1 {
            +"Card"
        }
        hr {}
        p() {
            addClass("card-container")
            mdCard {
                content {
                    +"The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae."
                }
            }
            mdCard {
                title {
                    +"Lion"
                }
                content {
                    +"The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae."
                }
            }
            mdCard {
                titleText {
                    subtitle {
                        +"Panthera leo"
                    }
                    title {
                        +"Lion"
                    }
                }
                content {
                    +"The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae."
                }
            }
            mdCard {
                titleText {
                    title {
                        +"Lion"
                    }
                    subtitle {
                        +"Panthera leo"
                    }
                }
                content {
                    +"The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae."
                }
            }
            mdCard {
                header {
                    avatar("portrait.jpg") {

                    }
                    text {
                        title {
                            +"Header title"
                        }
                        subtitle {
                            +"Header subtitle"
                        }
                    }
                }
                image("safari.jpg") {

                }
                titleText {
                    title {
                        +"Lion"
                    }
                    subtitle {
                        +"Panthera leo"
                    }
                }
                content {
                    +"The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae."
                }
                mdActions {
                    mdButton(Action("ACTION 1") {}) {}
                    mdButton(Action("ACTION 2") {}) {}
                }
            }
            mdCard {
                content {
                    image("safari.jpg") {

                    }
                }
                title {
                    +"Header title"
                }
            }

            mdCard {
                header {
                    avatar("portrait.jpg") {

                    }
                    text {
                        title {
                            +"Header text title"
                        }
                        subtitle {
                            +"Header text subtitle"
                        }
                    }
                }
                image("safari.jpg") {

                }
                content {
                    +"The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae."
                }
                mdActions {
                    mdButton(Action("ACTION 1") {}) {}
                    mdButton(Action("ACTION 2") {}) {}
                }
            }

            mdCard {
                image("safari.jpg") {

                }
                titleText {
                    title {
                        +"Title goes here"
                    }
                    subtitle {
                        +"Subtitle here"
                    }
                }
                mdActions {
                    mdButton(Action("ACTION 1") {}) {}
                    mdButton(Action("ACTION 2") {}) {}
                }
            }

            mdCard {
                image("safari.jpg") {

                }
                titleText {
                    title {
                        +"Lion"
                    }
                    subtitle {
                        +"Panthera leo"
                    }
                }
                mdActions {
                    mdButton(Action("ACTION 1") {}) {}
                    mdButton(Action("ACTION 2") {}) {}
                }
                content {
                    p {
                        +"The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae."
                    }
                    p {
                        +"In the wild, males seldom live longer than 10 to 14 years, as injuries sustained from continual fighting with rival males greatly reduce their longevity. In captivity they can live more than 20 years. They typically inhabit savanna and grassland, although they may take to bush and forest."
                    }
                }
            }

            mdCard {
                _style.backgroundImage = "url(safari.jpg)"
                _style.color = "white"

                titleText {
                    title {
                        +"Lion"
                    }
                    subtitle {
                        +"Panthera leo"
                    }
                }
                mdActions {
                    mdButton(Action("ACTION 1") {}) {}
                    mdButton(Action("ACTION 2") {}) {}
                }
            }
        }
    }

    val drawer = Div() with {
        h2 {
            +"Drawer"
        }
        p {
            button(Action("Show left drawer") {
                leftDrawer.show()
            }) { }

            button(Action("Show right drawer") {
                rightDrawer.show()
            }) { }
        }
    }

    val expansionPanel = Div() with {
        mdExpansionPanel {
            mdCollapsedPanel { +"Collapsed" }
            mdExpandedPanel { +"Expanded" }
        }

    }

    val deck = Deck() with {

        appendChild(drawer)
        appendChild(button)
        appendChild(menu)
        appendChild(radioButton)
        appendChild(card)
        appendChild(expansionPanel)
    }

    init {

        BODY with {
            _style.backgroundColor = "#ededed"

            BODY.dock(leftDrawer)
            appendChild(deck)
        }

        HTML.addCSSRule(AnyRule() with {
            boxSizing = "border-box"
        })
        HTML.addCSSRule(ClassRule(ClassSelector("card-container")) with {

            desc(".md-card") {
                marginBottom = "1em"


                desc("test") {

                }
            }


        })

        HTML.addCSSRule(ClassRule(ClassSelector("flex-row")) with {

            display = "flex"
            flexDirection = "row"

        })

        HTML.addCSSRule(ClassRule(ClassSelector("flex-column")) with {

            display = "flex"
            flexDirection = "column"

        })

        HTML.init()
    }
}

fun main(vararg args: String) {

    Main()

}