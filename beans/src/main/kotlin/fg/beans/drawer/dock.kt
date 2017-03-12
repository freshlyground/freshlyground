package fg.beans.drawer

import fg.base.Side
import fg.elements.Element

fun Element.dock(drawer: Drawer) {
    drawer.removeSelf()
    this.prependChild(drawer)

    drawer.undockedPositionValue = drawer._style.position
    drawer.undockedCssFloatValue = drawer._style.cssFloat

    drawer._style.position = "static"
    drawer._style.cssFloat = if (drawer.side == Side.LEFT) "left" else "right"
}

fun Drawer.undock() {
    this._style.position = this.undockedPositionValue
    this._style.cssFloat = this.undockedCssFloatValue
}

