package fg.beans.icon

import fg.elements.ClassSelector
import fg.elements.Element

class FontAwesomeIcon(val name: String, val size: Size? = null) : Icon {

    override fun apply(element: Element) {

        element.addClass("fa")
        element.addClass("fa-$name")

        if (size != null && size != Size.NORMAL) {
            element.addClass(size.selector.toString())
        }
    }

    enum class Size(val selector: ClassSelector?) {

        NORMAL(null),
        LG(ClassSelector("fa-lg")),
        X2(ClassSelector("fa-x2")),
        X3(ClassSelector("fa-x3")),
        X4(ClassSelector("fa-x4")),
        X5(ClassSelector("fa-x5"))
    }
}