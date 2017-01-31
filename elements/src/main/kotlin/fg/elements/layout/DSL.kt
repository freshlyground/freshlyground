package fg.elements.layout

import fg.elements.Element

fun Element.setLayout(direction: Direction, init: Layout.() -> Unit) {
    val layout = Layout(direction)
    layout.init()
    this.layout = layout
}

fun Layout.xsmall(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, DefaultBreakpoints.xsmall)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.small(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, DefaultBreakpoints.small)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.medium(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, DefaultBreakpoints.medium)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.large(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, DefaultBreakpoints.large)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.xlarge(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, DefaultBreakpoints.xlarge)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}