package fg.md.drawer

import fg.beans.drawer.Drawer
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

open class MDDrawer : Drawer() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDDrawer : StyledClass {

        override val classSelector = "md-drawer".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            backgroundColor = "pink"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}