package fg.md.button

import fg.beans.action.SelectableAction
import fg.beans.button.ToggleButton
import fg.beans.pkg
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.and
import fg.style.colour.RgbColor

open class MDToggleButton(action: SelectableAction) :
        ToggleButton(action) {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDToggleButton : StyledClass {

        override val classSelector = "$pkg-md-toggle-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            height = "36px"
            boxShadow = "none"
            border = "none"
            backgroundColor = RgbColor.TRANSPARENT.toString()

            and(".selected") {
                boxShadow = "none"
                border = "none"
                backgroundColor = RgbColor.TRANSPARENT.toString()
            }

            and(".focused") {
                boxShadow = "none"
                border = "none"
                backgroundColor = RgbColor.TRANSPARENT.toString()
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}