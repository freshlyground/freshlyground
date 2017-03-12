package fg.md.app

import fg.beans.app.AppBar
import fg.elements.HTML
import fg.elements.TypedStyledClass
import fg.elements.px
import fg.elements.style.typed.AlignItems
import fg.elements.style.typed.Display
import fg.elements.style.typed.FlexDirection
import fg.elements.toClassSelector
import fg.md.pkg
import fg.style.TypedClassRule
import fg.style.colour.RgbColor

class MDAppBar : AppBar() {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDAppBar : TypedStyledClass {

        override val classSelector = "$pkg-appbar".toClassSelector()

        override val rule: TypedClassRule.() -> Unit = {

            backgroundColor = RgbColor.RED
            height = 56.px

            display = Display.flex
            flexDirection = FlexDirection.row
            alignItems = AlignItems.center
        }

        init {
            HTML.registerStyle(this)
        }
    }
}