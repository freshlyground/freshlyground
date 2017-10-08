package fg.elements.layout

import fg.elements.Element

fun Element.layout(init: Layout.() -> Unit) {
    val layoutApi = Layout(this)
    layoutApi.init()
    this._layout = layoutApi
}

fun Layout.xsmall(init: BreakpointLayout.() -> Unit) {
    val breakpoint = BreakpointLayout(DefaultBreakpoints.xsmall)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.small(init: BreakpointLayout.() -> Unit) {
    val breakpoint = BreakpointLayout(DefaultBreakpoints.small)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.medium(init: BreakpointLayout.() -> Unit) {
    val breakpoint = BreakpointLayout(DefaultBreakpoints.medium)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.large(init: BreakpointLayout.() -> Unit) {
    val breakpoint = BreakpointLayout(DefaultBreakpoints.large)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}

fun Layout.xlarge(init: BreakpointLayout.() -> Unit) {
    val breakpoint = BreakpointLayout(DefaultBreakpoints.xlarge)
    breakpoint.init()
    this.addBreakpoint(breakpoint)
}
