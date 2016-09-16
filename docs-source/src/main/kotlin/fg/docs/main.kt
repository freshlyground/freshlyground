package fg.docs

import fg.elements.Selector
import fg.elements.body
import fg.elements.html
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
import fg.style.Style


fun main(vararg args: String) {
    val html = html
    val body = body


    body with {

        mdCard {
            title {
                +"Freshlyground"
            }
            subtitle {
                +"A web framework for programming rich web clients in Kotlin"
            }
        }
    }

    html.registerClassStyle(Style(Selector.ANY) with {
        boxSizing = "border-box"
    })

    html.init()
}

