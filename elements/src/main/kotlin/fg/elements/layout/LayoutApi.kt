package fg.elements.layout

import fg.elements.Element
import kotlin.properties.Delegates

class LayoutApi(val element: Element) {

    private var needsResizeListening: Boolean = false
    private val resizedHandler: (Element.ResizedEvent) -> Unit = { event ->

        layout?.run {

            element.childElements.forEach { child ->

                child._layout.parentResized(event)
            }

            this.doHandleResize(element, event)
        }
    }

    private val hideOnBreakpoints: MutableList<Breakpoint> by lazy { arrayListOf<Breakpoint>() }

    var layout: Layout? by Delegates.observable(null) { property, oldValue: Layout?, newValue: Layout? ->
        if (newValue != null) {
            newValue.apply(element)
        } else {
            Layout.remove(element)
        }
        this.needsResizeListening = needsResizeListening(newValue)
        evaluateResizeListening()
    }

    private fun parentResized(event: Element.ResizedEvent) {
        val hideOrShow = hideOnBreakpoints.any { it.contains(event.width) }
        if (hideOrShow) {
            element.hide()
        } else {
            element.show()
        }
    }

    fun hideOn(vararg breakpoint: Breakpoint) {
        breakpoint.forEach { hideOnBreakpoints.add(it) }
    }

    private fun needsResizeListening(layout: Layout?): Boolean {
        return layout != null
    }

    private fun evaluateResizeListening() {

        if (needsResizeListening) {
            element.onResized(resizedHandler)
        } else {
            element.unResized(resizedHandler)
        }
    }

    internal fun unregister() {
        if (needsResizeListening) {
            element.unResized(resizedHandler)
        }
    }
}