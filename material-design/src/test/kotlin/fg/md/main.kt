package fg.md

import fg.beans.Action
import fg.beans.button
import fg.beans.drawer.Drawer
import fg.elements.BODY
import fg.elements.ClassSelector
import fg.elements.HTML
import fg.elements.div
import fg.elements.h1
import fg.elements.hr
import fg.elements.p
import fg.elements.with
import fg.md.button.MDButton
import fg.style.AnyRule
import fg.style.ClassRule
import fg.style.desc

fun main(vararg args: String) {


    BODY with {
        style.backgroundColor = "#ededed"

        val leftDrawer = mdDrawer(Drawer.Side.LEFT) {
            hide()
            style.width = "250px"

            p { +"A Drawer" }
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
                title {
                    +"Lion"
                }
                content {
                    +"Panthera leo"
                }
            }
            val hideDrawerAction = Action("Hide drawer") {
                hide()
            }
            hr {}
            button(hideDrawerAction) {}
        }
        val rightDrawer = mdDrawer(Drawer.Side.RIGHT) {
            hide()
            style.width = "250px"

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

        h1 {
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

        hr {}

        h1 {
            +"Button"
        }
        div {
            addClass("flex-row")
            p() {
                addClass("flex-column")
                mdButton(Action(label = "FLAT", perform = {}), MDButton.Type.FLAT) {}
                mdButton(Action(label = "FLAT", enabled = false, perform = {}), MDButton.Type.FLAT) {}
            }
            p {
                addClass("flex-column")
                mdButton(Action(label = "RAISED", perform = {}), MDButton.Type.RAISED) {}
                mdButton(Action(label = "RAISED", enabled = false, perform = {}), MDButton.Type.RAISED) {}
            }
            p {
                addClass("flex-column")
                mdButton(Action(label = "FLOATING", perform = {}), MDButton.Type.FLOATING) {}
                mdButton(Action(label = "FLOATING", enabled = false, perform = {}), MDButton.Type.FLOATING) {}
            }
        }
        hr {}

        h1 {
            +"Card"
        }
        hr {}
        div() {
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
                style.backgroundImage = "url(safari.jpg)"
                style.color = "white"

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