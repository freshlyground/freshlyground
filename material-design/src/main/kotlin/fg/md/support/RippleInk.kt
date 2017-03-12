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
        this.style.width = size
        this.style.height = size
    }

    internal fun setPosition(position: Pair<Double, Double>) {
        this.style.left = position.first.px
        this.style.top = position.second.px
    }

    private fun renderColor(color: RgbColor) {
        style.backgroundColor = color
    }

    override fun render() {
        super.render()

        addClass(classSelector)
        renderColor(color)
    }

    companion object RippleInk : StyledClass {

        override val classSelector = "md-ripple-ink".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _transform = "scale(0)"
            _position = "absolute"
            _opacity = "0.75"
            _padding = "24px"
            _borderRadius = "100%"
            _animation = "ripple 1000ms"
        }

        init {
            HTML.registerStyle(this)

            val rule = Unit.keyframesRule("ripple") {
                kto {
                    _opacity = "0"
                    _transform = "scale(2)"
                }
            }
            HTML.registerCSSRule(rule)
        }
    }
}