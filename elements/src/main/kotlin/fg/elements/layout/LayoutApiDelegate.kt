package fg.elements.layout

import fg.elements.Element
import kotlin.properties.Delegates
import kotlin.properties.ObservableProperty
import kotlin.reflect.KProperty

class LayoutApiDelegate(val element: Element) : ObservableProperty<LayoutApi>(LayoutApi(element)) {

    private var layoutApi: LayoutApi by Delegates.notNull()

    override fun beforeChange(property: KProperty<*>, oldValue: LayoutApi, newValue: LayoutApi): Boolean {
        return super.beforeChange(property, oldValue, newValue)
    }

    override fun afterChange(property: KProperty<*>, oldValue: LayoutApi, newValue: LayoutApi) {
        oldValue.unregister()
        this.layoutApi = newValue
        super.afterChange(property, oldValue, newValue)
    }
}