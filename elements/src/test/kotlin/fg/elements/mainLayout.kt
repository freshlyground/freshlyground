package fg.elements

import fg.elements.layout.layout
import fg.elements.layout.medium
import fg.elements.layout.small
import fg.elements.layout.xsmall
import fg.elements.style.typed.Flex
import fg.elements.style.typed.FlexDirection
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
                    style.flexDirection = FlexDirection.row

                    xsmall {
                        style.flexDirection = FlexDirection.column
                    }
                    small {
                        style.flexDirection = FlexDirection.column
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
                    style.flexDirection = FlexDirection.row
                }
                div {
                    style.flexGrow = FlexGrow(1.0)
                    layout {
                        style.flexDirection = FlexDirection.row
                        medium {
                            onActivated { hide() }
                            onDeactivated { show() }
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
                        style.flexGrow = FlexGrow(1.0)
                    }
                }
                div {
                    style.flexGrow = FlexGrow(1.0)
                    layout {
                        style.flexDirection = FlexDirection.column
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
                        style.flexGrow = FlexGrow(1.0)
                    }
                }
            }

            h2 {
                +"Responsive Show & Hide"
            }
            div {
                layout {
                    style.flexDirection = FlexDirection.row
                }
                _id = "showNhide-outer-div"

                div {
                    layout {
                        xsmall {
                            onActivated { hide() }
                            onDeactivated { show() }
                        }
                    }
                    +"hide on xsmall and small"
                    style.backgroundColor = RgbColor.BLUE.withAlfa(0.3)
                    _style.padding = "8px"
                    style.flexGrow = FlexGrow(1.0)
                    _id = "showNhide-main-div"

                }
                div {
                    +"Always show"
                    style.backgroundColor = RgbColor.RED.withAlfa(0.3)
                    _style.padding = "8px"
                    style.flexGrow = FlexGrow(1.0)
                }
            }

            h2 {
                +"Responsive Typed Style"
            }
            div {
                layout {
                    style.flexDirection = FlexDirection.row

                    xsmall {
                        style.flexDirection = FlexDirection.column
                    }
                    small {
                        style.flexDirection = FlexDirection.column
                    }
                }

                div {
                    +"A"
                    style.backgroundColor = RgbColor.BLUE.withAlfa(0.3)
                    _style.padding = "8px"
                    style.flexGrow = FlexGrow(1.0)

                    layout {
                        small {
                            style.flex = Flex(1)
                        }
                    }
                }
                div {
                    +"B"
                    style.backgroundColor = RgbColor.RED.withAlfa(0.3)
                    _style.padding = "8px"
                    style.flexGrow = FlexGrow(1.0)
                }
            }
        }

    }
}