package fg.elements

import fg.elements.layout.DefaultBreakpoints
import fg.elements.layout.Direction
import fg.elements.layout.direction
import fg.elements.layout.layout
import fg.elements.layout.small
import fg.elements.layout.xsmall
import fg.elements.style.typed.FlexGrow
import fg.style.colour.RgbColor

object mainLayout {

    fun start() {

        BODY with {

            h1 {
                +"Layout"
            }

            h2 {
                +"Responsive Layout Directions"
            }
            div {
                layout {
                    direction(Direction.ROW) {
                        small(Direction.COLUMN) {}
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
                    style.flexGrow = FlexGrow(1.0)
                }
            }

            h2 {
                +"Multiple Responsive Columns"
            }
            div {
                layout {
                    direction(Direction.ROW) {

                    }
                }
                div {
                    layout {
                        direction(Direction.ROW) {
                            hideOn(DefaultBreakpoints.medium)
                        }
                    }
                    div {
                        +"Col #1 First item in row"
                        style.backgroundColor = RgbColor.BLUE.withAlfa(0.3)
                        _style.padding = "8px"
                        style.flexGrow = FlexGrow(1.0)
                    }
                    div {
                        +"Col #1 Second item in row"
                        style.backgroundColor = RgbColor.RED.withAlfa(0.3)
                        _style.padding = "8px"
                    }
                }
                div {
                    layout {
                        direction(Direction.COLUMN) {

                        }
                    }
                    div {
                        +"Col #2 First item in column"
                        style.backgroundColor = RgbColor.BLUE.withAlfa(0.3)
                        _style.padding = "8px"
                        style.flexGrow = FlexGrow(1.0)
                    }
                    div {
                        +"Col #2 Second item in column"
                        style.backgroundColor = RgbColor.RED.withAlfa(0.3)
                        _style.padding = "8px"
                    }
                }
            }


        }

    }
}