package fg.beans.drawer

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

open class Drawer : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object Drawer : StyledClass {

        override val classSelector = "drawer".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            position = "fixed"
            zIndex = "1300"
            left = "0"
            top = "0"
            height = "100%"
            backgroundColor = "white"
            boxShadow = "rgba(0, 0, 0, 0.156863) 0px 3px 10px, " +
                    "rgba(0, 0, 0, 0.227451) 0px 3px 10px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}