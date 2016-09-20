package fg.beans

import fg.beans.icon.Icon
import kotlin.properties.Delegates
import kotlin.reflect.KProperty

open class Action(label: String? = null,
                  enabled: Boolean = true,
                  icon: Icon? = null,
                  perform: () -> Unit) {

    private val perform: () -> Unit = perform

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

    fun onPropertyChanged(listener: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit) {
        propertyChangedListeners.add(listener)
    }

    fun unPropertyChanged(listener: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit) {
        propertyChangedListeners.remove(listener)
    }

    fun perform() {
        if (enabled) {
            this.perform.invoke()
        }
    }
}