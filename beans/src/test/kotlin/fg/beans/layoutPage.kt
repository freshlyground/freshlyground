package fg.beans

import fg.elements.BODY
import fg.elements.div
import fg.elements.h1
import fg.elements.h2
import fg.elements.layout.Breakpoint
import fg.elements.layout.Direction
import fg.elements.layout.setLayout
import fg.elements.layout.xs
import fg.elements.style.typed.Flex
import fg.elements.style.typed.FlexGrow
import fg.elements.with
import fg.style.colour.RgbColor

object layoutPage {

    val name = "Layout"

    fun start() {

        BODY with {

            h1 {
                +"Layout"
            }
            h2 { +"Containers" }
            div {
                setLayout(Direction.ROW) {}
                div {
                    setLayout(Direction.ROW) {}
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
                    setLayout(Direction.COLUMN) {
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
            }
            h2 {
                +"Responsive"
            }
            div {
                setLayout(Direction.ROW) {
                    xs(Direction.COLUMN) {}
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
                    hideOn(Breakpoint.small, Breakpoint.xsmall)
                }
            }
            h2 {
                +"Responsive - keywords"
            }
            div {
                setLayout(Direction.COLUMN) { }
                div {
                    setLayout(Direction.ROW) { }
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

