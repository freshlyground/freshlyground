package fg.beans

import fg.beans.icon.Icon
import fg.elements.ClassSelector
import fg.elements.toClassSelector
import kotlin.properties.Delegates

class SelectableAction(label: String?,
                       enabled: Boolean = true,
                       icon: Icon? = null,
                       selected: Boolean = false,
                       perform: () -> Unit) :
        Action(label, enabled, icon, perform) {

    var selected: Boolean by Delegates.observable(selected) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    companion object Statics {
        val selectedSelector: ClassSelector = ".action-selected".toClassSelector()
    }
}