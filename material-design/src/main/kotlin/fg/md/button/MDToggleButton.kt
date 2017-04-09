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

            _height = "36px"
            _boxShadow = "none"
            _border = "none"
            _backgroundColor = RgbColor.TRANSPARENT.toString()

            and(".selected") {
                _boxShadow = "none"
                _border = "none"
                _backgroundColor = RgbColor.TRANSPARENT.toString()
            }

            and(".focused") {
                _boxShadow = "none"
                _border = "none"
                _backgroundColor = RgbColor.TRANSPARENT.toString()
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}