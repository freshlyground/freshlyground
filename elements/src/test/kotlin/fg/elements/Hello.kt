package fg.elements

import fg.style.active
import fg.style.classStyle
import fg.style.hover

class Hello : Span() {

    override val styleClassPrefix: String? = "demo"
    override val styleClass = classStyle {
        border = "1px solid green"
        backgroundColor = "#ccc"

        /*and(":hover") {
            backgroundColor = "lightblue"
        }*/


        hover {
            backgroundColor = "lightblue"
        }

        active {
            border = "1px solid red"
        }


    }

    override fun render() {

        appendChild(Text("Hello"))

    }
}