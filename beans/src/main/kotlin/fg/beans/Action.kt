package fg.beans

import fg.beans.icon.Icon
import kotlin.properties.Delegates
import kotlin.reflect.KProperty

open class Action(label: String? = null,
                  enabled: Boolean = true,
                  icon: Icon? = null) {

    var label: String? by Delegates.observable(label) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    var enabled: Boolean by Delegates.observable(enabled) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    var icon: Icon? by Delegates.observable(icon) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    private val propertyChangedListeners: MutableList<(action: Action,
                                                       property: KProperty<*>,
                                                       old: Any?, new: Any?) -> Unit> = arrayListOf()

    internal fun notifyPropertyChanged(property: KProperty<*>, old: Any?, new: Any?) {
        for (listener in propertyChangedListeners) listener(this, property, old, new)
    }

    fun <T> onPropertyChanged(listener: (action: Action, property: KProperty<*>, old: T?, new: T?) -> Unit) {
        propertyChangedListeners.add(listener as (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit)
    }

    fun unPropertyChanged(listener: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit) {
        propertyChangedListeners.remove(listener)
    }
}