package fg.md

import fg.base.Side
import fg.beans.action.Action
import fg.beans.action.SelectableAction
import fg.beans.button
import fg.beans.deck.Deck
import fg.beans.drawer.dock
import fg.elements.BODY
import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.HTML
import fg.elements.Percent
import fg.elements.br
import fg.elements.div
import fg.elements.h1
import fg.elements.h2
import fg.elements.hr
import fg.elements.inputText
import fg.elements.layout.Direction
import fg.elements.layout.Layout
import fg.elements.layout.setLayout
import fg.elements.p
import fg.elements.span
import fg.elements.with
import fg.keyboard.Key
import fg.md.button.MDButton
import fg.md.colour.MDColor
import fg.md.drawer.MDDrawer
import fg.md.icon.MDIcon
import fg.md.icon.MDIconProvider
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
                    mdMenuItem(Action("Icon") { deck.show(icon) }) {}
                    mdMenuItem(Action("Menu") { deck.show(menu) }) {}
                    mdMenuItem(Action("Card") { deck.show(card) }) {}
                    mdMenuItem(Action("ExpansionPanel") { deck.show(expansionPanel) }) {}
                    mdMenuItem(Action("Toolbar") { deck.show(toolbar) }) {}
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

    val icon: Div = Div() with {

        h2 {
            +"Icon"
        }
        p {
            mdIcon { +"face"; size = MDIcon.Size.s36px }
        }
    }


    val button: Div = Div() with {
        setLayout(direction = Direction.COLUMN) {}
        h2 {
            +"Button"
        }
        div {
            setLayout(direction = Direction.COLUMN) {}
            div {
                setLayout(direction = Direction.ROW) {}

                span { +"Flat: " }

                mdButton(Action(label = "FLAT", perform = {}), MDButton.Type.FLAT) {}
                mdButton(Action(label = "CUSTOM STYLE", perform = {}), MDButton.Type.FLAT) {
                    flatStyle.backgroundColor = RgbColor(200, 200, 255)
                }
                mdButton(Action(label = "FLAT", enabled = false, perform = {}), MDButton.Type.FLAT) {}
            }
            div {
                setLayout(direction = Direction.ROW) {}

                span { +"Raised: " }
                mdButton(Action(label = "RAISED", perform = {}), MDButton.Type.RAISED) {}
                mdButton(Action(label = "RAISED", enabled = false, perform = {}), MDButton.Type.RAISED) {}
            }
            div {
                setLayout(direction = Direction.ROW) {}

                span { +"Floating: " }
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
            div {
                setLayout(direction = Direction.ROW) {}

                span { +"Toggle: " }
                mdToggleButton(SelectableAction("Toggle") {}) {}
                mdToggleButton(SelectableAction(
                        deselectedIcon = MDIconProvider.expand_more,
                        selectedIcon = MDIconProvider.expand_less,
                        label = "",
                        perform = {})) {}
            }
        }
    }

    val menu = Div() with {
        h2 {
            +"Menu"
        }
        p {
            mdMenu {
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
            collapsed.toolbar with {
                +"Trip name"
                span { +"Caribbean Cruise" }
                span { +"" }
            }
            expanded.toolbar with {
                +"Trip name"
                inputText { value = "Caribbean Cruise" }
                span { +"" }
            }
            expanded.content with {
                +"Some information coming here"
            }

        }
        br { }
        mdExpansionPanel {
            collapsed.toolbar with {
                +"Trip name"
                span { +"Caribbean Cruise" }
                span { +"" }
            }
            expanded.toolbar with {
                +"Trip name"
                inputText { value = "Caribbean Cruise" }
                span { +"" }
            }
            expanded.content with {
                +"Some information coming here"
            }

        }
        mdExpansionPanel {
            collapsed.toolbar with {
                +"Trip name"
                span { +"Mediterranean Cruise" }
                span { +"" }
            }
            expanded.toolbar with {
                +"Trip name"
                inputText { value = "Mediterranean Cruise" }
                span { +"" }
            }
            expanded.content with {
                +"Some information coming here"
            }

        }
    }

    val toolbar = Div() with {

        h2 {
            +"Toolbar"
        }
        div {
            mdToolbar {
                span { +"Application" }
                mdButton(Action("FLAT") {}, MDButton.Type.FLAT) {}
                mdButton(Action("RAISED") {}, MDButton.Type.RAISED) {}
                spacer()
                mdToggleButton(SelectableAction(selectedIcon = MDIconProvider.expand_less, deselectedIcon = MDIconProvider.expand_more)) {}
            }
        }
    }

    val deck = Deck() with {
        style.width = Percent(100.0)

        appendChild(drawer)
        appendChild(icon)
        appendChild(button)
        appendChild(menu)
        appendChild(radioButton)
        appendChild(card)
        appendChild(expansionPanel)
        appendChild(toolbar)
    }

    init {

        BODY with {
            _style.backgroundColor = "#ededed"
            layout = Layout(direction = Direction.ROW)

            BODY.dock(leftDrawer)
            leftDrawer.style.backgroundColor = RgbColor.TRANSPARENT
            appendChild(deck)
            deck._style.marginLeft = "8px"
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