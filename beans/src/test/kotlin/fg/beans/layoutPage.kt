package fg.beans

import fg.elements.BODY
import fg.elements.Div
import fg.elements.div
import fg.elements.h1
import fg.elements.h2
import fg.elements.layout.DefaultBreakpoints
import fg.elements.layout.Direction
import fg.elements.layout.direction
import fg.elements.layout.hideOn
import fg.elements.layout.layout
import fg.elements.layout.xsmall
import fg.elements.style.typed.Flex
import fg.elements.style.typed.FlexGrow
import fg.elements.with
import fg.style.colour.RgbColor

object layoutPage {

    fun start() {

        BODY with {

            h1 {
                +"Layout"
            }
            h2 { +"Containers" }
            div {
                layout {
                    direction(Direction.ROW) { }
                }
                div {
                    layout {
                        direction(Direction.ROW) { }
                    }
                    div {
                        +"First item in row"
                        _style.padding = "8px"
                        style.position
                        style.backgroundColor = FGColors.saffron
                        style.color = RgbColor.WHITE
                    }
                    div {
                        +"Second item in row"
                        _style.padding = "8px"
                        style.backgroundColor = FGColors.redBrown
                        style.color = RgbColor.WHITE
                    }
                }
                div {
                    layout {
                        direction(Direction.COLUMN) { }
                    }
                    div {
                        +"First item in column"
                        _style.padding = "8px"
                        style.backgroundColor = FGColors.cinnamon
                    }
                    div {
                        +"Second item in column"
                        _style.padding = "8px"
                        style.backgroundColor = FGColors.brightYellow
                    }
                }
            }
            h2 {
                +"Responsive"
            }
            div {
                layout {
                    direction(Direction.ROW) {
                        xsmall(Direction.COLUMN) {}
                    }
                }
                div {
                    +" I'm above on mobile, and to the left on larger devices."
                    style.backgroundColor = RgbColor.BLUE.withAlfa(0.3)
                    _style.padding = "8px"
                    style.flexGrow = FlexGrow(1.0)
                }
                div {
                    +"I'm below on mobile, and to the right on larger devices."
                    style.backgroundColor = RgbColor.RED.withAlfa(0.3)
                    _style.padding = "8px"
                }
                div {
                    +"Im hidden, when not wide enough"
                    hideOn(DefaultBreakpoints.small, DefaultBreakpoints.xsmall)
                    val d = Div()
                }
            }
            h2 {
                +"Responsive - keywords"
            }
            div {
                layout {
                    direction(Direction.COLUMN) {}
                }
                div {
                    layout {
                        direction(Direction.ROW) {}
                    }
                    div {
                        +"flex: none"
                        style.flex = Flex.none
                        style.backgroundColor = FGColors.curry
                        _style.padding = "8px"
                    }
                    div {
                        +"flex: initial"
                        style.flex = Flex.initial
                        style.backgroundColor = FGColors.cinnamon
                        _style.padding = "8px"
                    }
                    div {
                        +"flex: auto"
                        style.flex = Flex.auto
                        style.backgroundColor = FGColors.saffron
                        _style.padding = "8px"
                    }
                }
            }
        }

    }
}

