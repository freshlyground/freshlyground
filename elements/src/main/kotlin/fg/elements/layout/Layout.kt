package fg.elements.layout

import fg.elements.Element

class Layout(direction: Direction,
             internal val none: Boolean = false) : AbstractLayout(direction) {


    private constructor() : this(direction = Direction.ROW, none = true)


    private val breakpoints: MutableList<LayoutBreakpoint> = arrayListOf()

    internal fun doHandleResize(element: Element, resizedEvent: Element.ResizedEvent) {

        val breakpoint = find(resizedEvent.width)

        if (breakpoint != null) {
            breakpoint.apply(element)
        } else {
            apply(element)
        }
    }

    private fun find(width: Double): LayoutBreakpoint? {
        return breakpoints.find { it.breakpoint.contains(width) }
    }

    fun addBreakpoint(breakpoint: LayoutBreakpoint) {
        breakpoints.add(breakpoint)
    }

    companion object {

        val NONE: Layout = Layout(direction = Direction.ROW, none = true)

        fun from(element: Element): Layout? {
            val layoutDir = Direction.from(element.w3cElement.getAttribute("data-fg-layout"))
            return layoutDir.toLayout()
        }

        fun remove(element: Element) {
            element.w3cElement.removeAttribute("data-fg-layout")
        }
    }
}