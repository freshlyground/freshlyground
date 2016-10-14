package fg.beans.drawer

import fg.elements.Element

fun Element.dock(element: Drawer) {
    element.removeSelf()
    this.prependChild(element)
    element.style.position = "static"
    element.style.cssFloat = "left"
}

fun Drawer.undock() {
    this.style.position = ""
    this.style.cssFloat = ""
}

