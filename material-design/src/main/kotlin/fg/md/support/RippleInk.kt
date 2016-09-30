package fg.md.support

import fg.elements.HTML
import fg.elements.Pixels
import fg.elements.Span
import fg.elements.StyledClass
import fg.elements.px
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.colour.RgbColor
import fg.style.keyframesRule
import fg.style.kto
import kotlin.properties.Delegates

class RippleInk(color: RgbColor) : Span() {

    var color: RgbColor by Delegates.observable(color) { property, old, new ->
        renderColor(new)
    }

    internal fun setSize(size: Pixels) {
        this.style.width = size.toHtml()
        this.style.height = size.toHtml()
    }

    internal fun setPosition(position: Pair<Double, Double>) {
        this.style.left = position.first.px.toHtml()
        this.style.top = position.second.px.toHtml()
    }

    private fun renderColor(color: RgbColor) {
        style.backgroundColor = color.toString()
    }

    override fun render() {
        super.render()

        addClass(classSelector)
        renderColor(color)
    }

    companion object RippleInk : StyledClass {

        override val classSelector = "md-ripple-ink".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            transform = "scale(0)"
            position = "absolute"
            opacity = "0.75"
            padding = "24px"
            borderRadius = "100%"
            animation = "ripple 1000ms"
        }

        init {
            HTML.registerStyle(this)

            val rule = Unit.keyframesRule("ripple") {
                kto() {
                    opacity = "0"
                    transform = "scale(2)"
                }
            }
            HTML.registerCSSRule(rule)
        }
    }
}