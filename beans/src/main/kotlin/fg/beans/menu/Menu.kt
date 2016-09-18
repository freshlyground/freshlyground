package fg.beans.menu

import fg.beans.pkg
import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.style.ClassRule

class Menu : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object Menu : StyledClass {

        override val classSelector: ClassSelector = ClassSelector("$pkg-menu")
        override val rule: ClassRule.() -> Unit = {

        }

        init {
            HTML.registerStyle(this)
        }
    }
}