package fg.beans

import fg.beans.icon.Icon
import fg.elements.Element
import fg.keyboard.Key
import kotlin.properties.Delegates
import kotlin.reflect.KProperty

open class Action(label: String? = null,
                  enabled: Boolean = true,
                  icon: Icon? = null,
                  shortcut: Key? = null,
                  perform: (ActionPerform) -> Unit) {

    private val _perform: (ActionPerform) -> Unit = perform

    var label: String? by Delegates.observable(label) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    var enabled: Boolean by Delegates.observable(enabled) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }
    val disabled: Boolean get() = !enabled

    var icon: Icon? by Delegates.observable(icon) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    var shortcut: Key? by Delegates.observable(shortcut) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    protected val propertyChangedListeners: MutableList<(action: Action,
                                                       property: KProperty<*>,
                                                       old: Any?, new: Any?) -> Unit> = arrayListOf()

    internal fun notifyPropertyChanged(property: KProperty<*>, old: Any?, new: Any?) {
        for (listener in propertyChangedListeners) listener(this, property, old, new)
    }

    open fun onPropertyChanged(listener: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit) {
        propertyChangedListeners.add(listener)
    }

    open fun unPropertyChanged(listener: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit) {
        propertyChangedListeners.remove(listener)
    }

    fun perform(source: Element) {
        if (enabled) {
            this._perform.invoke(ActionPerform(this, source))
        }
    }
}