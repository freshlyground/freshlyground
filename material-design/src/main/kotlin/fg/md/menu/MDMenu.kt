package fg.md.menu

import fg.beans.menu.Menu
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.keyboard.Key
import fg.md.pkg
import fg.style.ClassRule

class MDMenu(label: String? = null, shortcut: Key? = null) :
        Menu(label, shortcut) {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDMenu : StyledClass {

        override val classSelector = "$pkg-menu".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            paddingTop = "16px"
            paddingBottom = "16px"
            backgroundColor = "white"
            //boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
            boxShadow = "0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}