package fg.beans.app

import fg.elements.Div
import fg.elements.HTML
import fg.elements.Text
import fg.elements.TypedStyledClass
import fg.elements.toClassSelector
import fg.style.TypedClassRule
import fg.style.colour.RgbColor

open class AppBar : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)
        appendChild(Text("AppBar"))
    }

    companion object AppBar : TypedStyledClass {

        override val classSelector = "$pkg-appbar".toClassSelector()

        override val rule: TypedClassRule.() -> Unit = {

            backgroundColor = RgbColor.RED
        }

        init {
            HTML.registerStyle(this)
        }
    }
}