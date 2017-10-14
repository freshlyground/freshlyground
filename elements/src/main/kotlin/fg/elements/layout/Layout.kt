package fg.elements.layout

import fg.elements.Element
import fg.elements.onResize
import fg.elements.style.typed.DeferredTypedStyle
import fg.elements.style.typed.Display
import fg.elements.style.typed.TypedStyle
import org.w3c.dom.events.Event
import kotlin.browser.window

class Layout(private val element: Element) {

    private val breakpointLayouts: MutableList<BreakpointLayout> = arrayListOf()
    private var currentBreakpointLayout: BreakpointLayout? = null
    private var currentIsDefaultLayout: Boolean = false
    private var defaultActivated: Boolean = false
    private var defaultDeactivated: Boolean = false

    val style: TypedStyle by lazy { DeferredTypedStyle() }
    private val deferredTypedStyle: DeferredTypedStyle by lazy {
        style.unsafeCast<DeferredTypedStyle>()
    }
    private val onActivatedListeners: MutableList<() -> Unit> = arrayListOf()
    private val onDeactivatedListeners: MutableList<() -> Unit> = arrayListOf()

    private var registeredWindowResizedListener: Boolean = false

    private val windowResizedListener: (Event) -> Unit = {
        this.windowResized(window.innerWidth)
    }

    private fun windowResized(windowWidth: Int) {

        val breakpointLayout = find(windowWidth.toDouble())

        if (breakpointLayout != null) {
            if (breakpointLayout !== currentBreakpointLayout) {
                breakpointLayout.apply(this.element)
                currentIsDefaultLayout = false
                currentBreakpointLayout?.run {
                    this.handleOnDeactivated()
                }
                currentBreakpointLayout = breakpointLayout
                if (!defaultDeactivated) {
                    for (l in onDeactivatedListeners) {
                        l.invoke()
                    }
                    defaultDeactivated = true
                    defaultActivated = false
                }
            }
        } else {
            if (!currentIsDefaultLayout) {
                deferredTypedStyle.apply(this.element)
                if (!defaultActivated) {
                    for (l in onActivatedListeners) {
                        l.invoke()
                    }
                    defaultActivated = true
                    defaultDeactivated = false
                }
                currentIsDefaultLayout = true
                currentBreakpointLayout?.run {
                    this.handleOnDeactivated()
                }
                currentBreakpointLayout = null
            }
        }
    }

    fun initialize() {
        this.element.style.display = Display.flex
        deferredTypedStyle.apply(this.element)
        currentIsDefaultLayout = true
    }

    fun addBreakpoint(breakpoint: BreakpointLayout) {

        breakpointLayouts.add(breakpoint)

        if (!registeredWindowResizedListener) {
            registeredWindowResizedListener = true
            window.onResize(windowResizedListener)
        }
    }

    fun onActivated(listener: () -> Unit) {
        onActivatedListeners.add(listener)
    }

    fun unActivated(listener: () -> Unit) {
        onActivatedListeners.remove(listener)
    }

    fun onDeactivated(listener: () -> Unit) {
        onDeactivatedListeners.add(listener)
    }

    fun unDeactivated(listener: () -> Unit) {
        onDeactivatedListeners.remove(listener)
    }

    internal fun unregister() {
        if (registeredWindowResizedListener) {
            window.removeEventListener("resize", windowResizedListener)
        }
    }

    private fun find(width: Double): BreakpointLayout? {
        return breakpointLayouts.find { it.breakpoint.contains(width) }
    }
}