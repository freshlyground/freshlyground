package fg.elements

import fg.elements.style.typed.Display
import fg.style.colour.RgbColor

object mainFlexLayout {

    fun start() {

        BODY with {
            h1 {
                +"Flex Layout"
            }
            div {
                header {
                    +"Header"
                }
                main {
                    style.display = Display.flex
                    div {
                        style.order = 2
                        _style.flex = "1"
                        style.minWidth = 12.em
                        style.backgroundColor = RgbColor.RED
                        +"Main: In the wild, males seldom live longer than 10 to 14 years, as injuries sustained from continual fighting with rival males greatly reduce their longevity. In captivity they can live more than 20 years. They typically inhabit savanna and grassland, although they may take to bush and forest."
                    }
                    div {
                        style.order = 1
                        style.width = 200.px
                        style.backgroundColor = RgbColor.GREEN
                        +"Left"
                    }
                    div {
                        style.order = 3
                        style.width = 200.px
                        style.backgroundColor = RgbColor.BLUE
                        +"Right"
                    }
                }
                footer {
                    +"Footer"
                }
            }
        }
    }
}