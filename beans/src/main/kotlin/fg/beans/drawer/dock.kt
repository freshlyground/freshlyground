package fg.beans.drawer

import fg.base.Side
import fg.elements.Element

fun Element.dock(element: Drawer) {
    element.removeSelf()
    this.prependChild(element)
    element._style.position = "static"
    element._style.cssFloat = if (element.side == Side.LEFT) "left" else "right"
}

fun Drawer.undock() {
    this._style.position = ""
    this._style.cssFloat = ""
}

