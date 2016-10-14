package fg.beans.menu

import fg.beans.pkg
import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.keyboard.Key
import fg.style.ClassRule
import fg.style.colour.RgbColor
import kotlin.properties.Delegates

class Menu(label: String? = null, shortcut: Key? = null) : Div() {

    var label: String? by Delegates.observable(label) { property, old, new ->

    }
    var shortcut: Key? by Delegates.observable(shortcut) { property, old, new ->

    }

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object Menu : StyledClass {

        override val classSelector: ClassSelector = ClassSelector("$pkg-menu")
        override val rule: ClassRule.() -> Unit = {
            paddingTop = "4px"
            paddingBottom = "4px"
            backgroundColor = RgbColor.WHITE.toString()
        }

        init {
            HTML.registerStyle(this)
        }
    }
}