package fg.beans.button

import fg.beans.ElementStyle
import fg.beans.action.Action
import fg.beans.pkg
import fg.elements.Dimension
import fg.elements.HTML
import fg.elements.Pixels
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.and
import fg.style.colour.RgbColor
import fg.style.focus
import fg.style.hover

open class Button(action: Action) : AbstractButton(action) {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    object ButtonStyle : ElementStyle() {

        override var margin: String? = "0"

        override var backgroundColor: RgbColor? = RgbColor.WHITE

        override var borderStyle: String? = "outset"
        override var borderWidth: Dimension? = Pixels(1.0)
        override var borderColor: RgbColor? = RgbColor.from("#e4e4e4")
        override var borderRadius: Dimension? = Pixels(4.0)

        override var boxShadow: String? = "none"

        var hovered: ElementStyle? = object : ElementStyle() {
            override var cursor: String? = "pointer"
        }

        var disabled: ElementStyle? = object : ElementStyle() {
            override var cursor: String? = "not-allowed"
        }

        var pressed: ElementStyle? = object : ElementStyle() {
            override var backgroundColor: RgbColor? = RgbColor(118, 178, 240)
        }

        var focused: ElementStyle? = object : ElementStyle() {
            override var outline: String? = "none"
            override var borderColor: RgbColor? = RgbColor(144, 191, 240)
        }
    }

    companion object Button : StyledClass {

        override val classSelector = "$pkg-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            _margin = ButtonStyle.margin

            _borderStyle = ButtonStyle.borderStyle
            _borderWidth = ButtonStyle.borderWidth?.toString()
            _borderColor = ButtonStyle.borderColor?.toString()
            _borderRadius = ButtonStyle.borderRadius?.toString()
            _backgroundColor = ButtonStyle.backgroundColor?.toString()
            _boxShadow = ButtonStyle.boxShadow

            hover {
                _cursor = ButtonStyle.hovered?.cursor
                and(DISABLED) {
                    _cursor = ButtonStyle.disabled?.cursor
                }
            }

            focus {
                _borderColor = ButtonStyle.focused?.borderColor?.toString()
                _outline = ButtonStyle.focused?.outline
            }

            and(".pressed") {
                _backgroundColor = ButtonStyle.pressed?.backgroundColor?.toString()
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}