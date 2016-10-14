package fg.beans.drawer

import fg.base.Side
import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule
import kotlin.properties.Delegates

open class Drawer(side: Side) : Div() {

    var side: Side by Delegates.observable(side) {
        property, old, new ->
        renderSide(new)
    }

    override fun render() {
        super.render()

        addClass(classSelector)
        renderSide(side)
    }

    private fun renderSide(side: Side) {
        when (side) {
            Side.LEFT -> {
                style.left = "0"
            }
            Side.RIGHT -> {
                style.right = "0"
            }
        }
    }

    companion object Drawer : StyledClass {

        override val classSelector = "drawer".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            position = "fixed"
            zIndex = "1300"
            top = "0"
            height = "100%"
            backgroundColor = "white"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}