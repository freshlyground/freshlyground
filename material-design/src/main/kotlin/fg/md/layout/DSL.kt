package fg.md.layout

import fg.elements.layout.Direction
import fg.elements.layout.Layout
import fg.elements.layout.LayoutBreakpoint

fun Layout.mdXsmall(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, MDBreakpoints.xsmall)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.mdSmall(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, MDBreakpoints.small)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.mdMedium(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, MDBreakpoints.medium)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.mdLarge(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, MDBreakpoints.large)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.mdXlarge(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val breakpoint = LayoutBreakpoint(direction, MDBreakpoints.xlarge)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}