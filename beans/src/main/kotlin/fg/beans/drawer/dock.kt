package fg.beans.drawer

import fg.base.Side
import fg.elements.Element

fun Element.dock(element: Drawer) {
    element.removeSelf()
    this.prependChild(element)
    element.style.position = "static"
    element.style.cssFloat = if (element.side == Side.LEFT) "left" else "right"
}

fun Drawer.undock() {
    this.style.position = ""
    this.style.cssFloat = ""
}

