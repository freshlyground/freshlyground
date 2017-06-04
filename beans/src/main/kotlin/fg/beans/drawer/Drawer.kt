package fg.beans.drawer

import fg.base.Side
import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.style.typed.Position
import fg.elements.toClassSelector
import fg.style.ClassRule
import kotlin.properties.Delegates

open class Drawer(side: Side) : Div() {

    internal var undockedPositionValue: String = ""
    internal var undockedCssFloatValue: String = ""

    var side: Side by Delegates.observable(side) {
        property, old, new ->
        renderSide(new)
    }

    override fun render() {
        super.render()

        addClass(classSelector)
        renderSide(side)
    }

    fun float() {
        removeSelf()
        renderSide(side)
        style.position = Position.absolute
    }

    private fun renderSide(side: Side) {
        when (side) {
            Side.LEFT -> {
                _style.left = "0"
            }
            Side.RIGHT -> {
                _style.right = "0"
            }
        }
    }

    companion object : StyledClass {

        override val classSelector = "drawer".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _position = "fixed"
            _zIndex = "1300"
            _top = "0"
            _height = "100%"
            _backgroundColor = "white"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}