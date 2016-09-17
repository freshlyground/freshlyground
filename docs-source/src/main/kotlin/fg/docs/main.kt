package fg.docs

import fg.elements.BODY
import fg.elements.HTML
import fg.elements.Selector
import fg.elements.h1
import fg.elements.h2
import fg.elements.header
import fg.elements.p
import fg.elements.pre
import fg.elements.with
import fg.style.Style


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
    }

    HTML.registerStyle(Style(Selector.ANY) with {
        boxSizing = "border-box"
    })

    HTML.init()
}

