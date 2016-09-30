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
import fg.elements.px
import fg.elements.with
import fg.md.button.MDButton
import fg.style.AnyRule
import fg.style.ClassRule
import fg.style.desc

fun main(vararg args: String) {


    BODY with {
        val leftDrawer = mdDrawer(Drawer.Side.LEFT) {
            hide()
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
                content {
                    title {
                        +"Content title"
                    }
                    +"Here is some content"
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
                content {
                    title {
                        +"Content title"
                    }
                    +"Here is some content"
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
                    +"Basic card"
                }
            }
            mdCard {
                subtitle {
                    +"Subtitle first"
                }
                title {
                    +"Card with title"
                }
                content {
                    +"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                image("dino.jpg") {
                    _width = 100.px
                }
                content {
                    title {
                        +"Content title"
                    }
                    +"Here is some content"
                }
            }
            mdCard {
                content {
                    image("dino.jpg") {
                        _width = 100.px
                    }
                }
                title {
                    +"Header title"
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