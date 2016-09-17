package fg.beans.icon

import fg.elements.Element

interface Icon {

    fun apply(element: Element)
}


fun Icon?.apply(element: Element) {

    if (this != null) {
        this.apply(element)
    } else {
        element.removeClasses()
    }
}
