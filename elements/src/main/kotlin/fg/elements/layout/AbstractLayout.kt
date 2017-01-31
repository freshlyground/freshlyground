package fg.elements.layout

import fg.elements.Element
import fg.elements.style.typed.Display
import kotlin.properties.Delegates

abstract class AbstractLayout(direction: Direction) {

    var direction: Direction by Delegates.observable(direction) { property, old, new ->

    }

    fun apply(element: Element) {
        element.w3cElement.setAttribute("data-fg-layout", direction.name)
        element.style.display = Display.flex
        element.style.flexDirection = direction.flex
    }

    companion object Statics {

        val ROW: Layout = Layout(Direction.ROW)
        val COLUMN: Layout = Layout(Direction.COLUMN)

        fun from(element: Element): Layout? {
            val layoutDir = Direction.from(element.w3cElement.getAttribute("data-fg-layout"))
            return layoutDir.toLayout()
        }

        fun remove(element: Element) {
            element.w3cElement.removeAttribute("data-fg-layout")
        }
    }
}