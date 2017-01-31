package fg.elements.layout

import fg.elements.Element
import kotlin.properties.Delegates
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

class LayoutDelegate() : ReadWriteProperty<Element, Layout?> {

    private var _layout: Layout? = null
    private var _element: Element by Delegates.notNull()

    private val resizedHandler: (Element.ResizedEvent) -> Unit = { event ->

        if (this._layout != null) {
            doHandleResize(_layout!!, event)
        }
    }

    private fun doHandleResize(layout: Layout, resizedEvent: Element.ResizedEvent) {

        val breakpoint = layout.find(resizedEvent.width)

        if (breakpoint != null) {
            breakpoint.apply(this._element)
        } else {
            layout.apply(this._element)
        }
    }

    override operator fun getValue(thisRef: Element, property: KProperty<*>): Layout? {
        return _layout
    }

    override operator fun setValue(thisRef: Element, property: KProperty<*>, value: Layout?) {

        _element = thisRef

        if (value != null) {
            value.apply(thisRef)
            thisRef.onResized(resizedHandler)
        } else {
            thisRef.unResized(resizedHandler)
            Layout.remove(thisRef)
        }

        _layout = value
    }
}