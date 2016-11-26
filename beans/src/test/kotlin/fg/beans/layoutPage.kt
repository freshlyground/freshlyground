package fg.beans

import fg.elements.BODY
import fg.elements.div
import fg.elements.h1
import fg.elements.layout.Direction
import fg.elements.layout.setLayout
import fg.elements.layout.xs
import fg.elements.with
import fg.style.colour.RgbColor

object layoutPage {

    val name = "Layout"

    fun start() {

        BODY with {

            h1 {
                +"Layout"
            }
            div {
                setLayout(Direction.ROW) {
                    xs(Direction.COLUMN) {}
                }

                div {
                    +" I'm above on mobile, and to the left on larger devices."
                    style.backgroundColor = RgbColor.BLUE.withAlfa(0.3)
                }
                div {
                    +"I'm below on mobile, and to the right on larger devices."
                    style.backgroundColor = RgbColor.RED.withAlfa(0.3)
                }
            }
        }

    }
}

