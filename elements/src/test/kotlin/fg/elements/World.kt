package fg.elements

import fg.style.classStyle
import fg.style.ClassStyle

class World : Span() {

    override val styleClassPrefix: String? = "demo"

    override val styleClass: ClassStyle? = classStyle {
        border = "1px solid lightblue"
        backgroundColor = "red"
    }


    override fun render() {
        appendChild(Text("World"))
    }
}