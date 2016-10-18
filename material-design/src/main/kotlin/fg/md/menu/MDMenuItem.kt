package fg.md.menu

import fg.beans.Action
import fg.beans.menu.MenuItem
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.md.pkg
import fg.style.ClassRule

class MDMenuItem(action: Action) : MenuItem(action) {

    override fun render() {
        super.render()

        addClass(MDMenuItem.classSelector)
    }

    companion object MDMenuItem : StyledClass {

        override val classSelector = "$pkg-menu-item".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            fontFamily = "Roboto, 'Helvetica Neue', sans-serif"
            height = "32px"
            paddingLeft = "24px"
            paddingRight = "24px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}