package fg.elements

import fg.elements.style.typed.Border
import fg.elements.style.typed.BorderStyle
import fg.style.colour.RgbColor

object mainTypedStyle {

    fun start() {

        BODY with {
            h1 {
                +"Typed Style"
            }
            div {
                p {
                    style.backgroundColor = RgbColor.RED
                    +"backgroundColor"
                }
                p {
                    style.border = Border(1.px, BorderStyle.solid, RgbColor.RED)
                    +"style.border"
                }
            }
        }
    }
}