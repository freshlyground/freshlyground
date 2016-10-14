package fg.beans.button

import fg.beans.Action
import fg.beans.ElementStyle
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

            margin = ButtonStyle.margin

            borderStyle = ButtonStyle.borderStyle
            borderWidth = ButtonStyle.borderWidth?.toString()
            borderColor = ButtonStyle.borderColor?.toString()
            borderRadius = ButtonStyle.borderRadius?.toString()
            backgroundColor = ButtonStyle.backgroundColor?.toString()
            boxShadow = ButtonStyle.boxShadow

            hover {
                cursor = ButtonStyle.hovered?.cursor
                and(DISABLED) {
                    cursor = ButtonStyle.disabled?.cursor
                }
            }

            focus {
                borderColor = ButtonStyle.focused?.borderColor?.toString()
                outline = ButtonStyle.focused?.outline
            }

            and(".pressed") {
                backgroundColor = ButtonStyle.pressed?.backgroundColor?.toString()
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}