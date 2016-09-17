package fg.beans.menu

import fg.beans.pkg
import fg.elements.ClassSelector
import fg.elements.Div

class Menu : Div() {

    override val styleClassPrefix = pkg

    override fun render() {
        super.render()

        addClass()
    }

    companion object Statics {

        val selector: ClassSelector = ClassSelector("$pkg-menu")
    }
}