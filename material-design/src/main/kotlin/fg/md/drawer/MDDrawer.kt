package fg.md.drawer

import fg.base.Side
import fg.beans.drawer.Drawer
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

open class MDDrawer(side: Side) : Drawer(side) {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDDrawer : StyledClass {

        override val classSelector = "md-drawer".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _backgroundColor = "white"
            //boxShadow = "rgba(0, 0, 0, 0.156863) 0px 3px 10px, " +
            //        "rgba(0, 0, 0, 0.227451) 0px 3px 10px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}