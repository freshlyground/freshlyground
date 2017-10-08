package fg.elements.layout

import fg.elements.Element
import fg.elements.style.typed.DeferredTypedStyle
import fg.elements.style.typed.TypedStyle

class BreakpointLayout(val breakpoint: Breakpoint) {

    private val onActivatedListeners: MutableList<(Breakpoint) -> Unit> = arrayListOf()
    private val onDeactivatedListeners: MutableList<(Breakpoint) -> Unit> = arrayListOf()

    val style: TypedStyle by lazy { DeferredTypedStyle() }

    internal fun apply(element: Element) {
        style.unsafeCast<DeferredTypedStyle>().apply(element)
        for (l in onActivatedListeners) {
            l.invoke(breakpoint)
        }
    }

    internal fun handleOnDeactivated() {
        for (l in onDeactivatedListeners) {
            l.invoke(breakpoint)
        }
    }

    fun onActivated(listener: (Breakpoint) -> Unit) {
        onActivatedListeners.add(listener)
    }

    fun unActivated(listener: (Breakpoint) -> Unit) {
        onActivatedListeners.remove(listener)
    }

    fun onDeactivated(listener: (Breakpoint) -> Unit) {
        onDeactivatedListeners.add(listener)
    }

    fun unDeactivated(listener: (Breakpoint) -> Unit) {
        onDeactivatedListeners.remove(listener)
    }
}