package fg.md.card

import fg.elements.ClassSelector
import fg.elements.Selector
import fg.elements.body
import fg.elements.div
import fg.elements.html
import fg.elements.img
import fg.elements.px
import fg.elements.with
import fg.md.avatar
import fg.md.content
import fg.md.header
import fg.md.image
import fg.md.mdCard
import fg.md.subtitle
import fg.md.text
import fg.md.title
import fg.style.ClassStyle
import fg.style.Style
import fg.style.desc
import org.w3c.dom.events.Event

fun main(vararg args: String) {

    val html = html
    val body = body

    val clickHandler: (Event) -> Unit = { event ->
        console.log(event)
    }

    body with {
        div("card-container") {
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

    html.registerClassStyle(Style(Selector.ANY) with {
        boxSizing = "border-box"
    })
    html.registerClassStyle(ClassStyle(ClassSelector("card-container")) with {

        desc(".md-card") {
            marginBottom = "1em"


            desc("test") {

            }
        }


    })
    html.init()
}