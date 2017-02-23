package fg.md.support

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class RippleContainer : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object RippleContainer : StyledClass {

        override val classSelector = "md-ripple-container".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _position = "absolute"
            _top = "0"
            _right = "0"
            _bottom = "0"
            _left = "0"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}