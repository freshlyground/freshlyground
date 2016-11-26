package fg.elements.layout

import fg.elements.Element

class Layout(direction: Direction) : LayoutBreakpoint(direction) {

    var xs: LayoutBreakpoint? = null

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