package fg.elements.layout

import fg.elements.Element

class Layout(direction: Direction) : AbstractLayout(direction) {

    private val breakpoints: MutableList<LayoutBreakpoint> = arrayListOf()

    fun addBreakpoint(breakpoint: LayoutBreakpoint) {
        breakpoints.add(breakpoint)
    }

    fun find(width: Double): LayoutBreakpoint? {
        return breakpoints.find { it.breakpoint.contains(width) }
    }

    companion object Statics {

        fun from(element: Element): Layout? {
            val layoutDir = Direction.from(element.w3cElement.getAttribute("data-fg-layout"))
            return layoutDir.toLayout()
        }

        fun remove(element: Element) {
            element.w3cElement.removeAttribute("data-fg-layout")
        }
    }
}