package fg.elements.layout

import fg.elements.Element

fun Element.setLayout(direction: Direction, init: Layout.() -> Unit) {
    val layout = Layout(direction)
    layout.init()
    this.layout = layout
}

fun Layout.xs(direction: Direction, init: LayoutBreakpoint.() -> Unit) {
    val layout = LayoutBreakpoint(direction)
    layout.init()
    this.xs = layout
}

