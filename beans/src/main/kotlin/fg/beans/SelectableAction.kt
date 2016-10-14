package fg.beans

import fg.beans.icon.Icon
import fg.elements.ClassSelector
import fg.elements.toClassSelector
import fg.keyboard.Key
import kotlin.properties.Delegates

class SelectableAction(label: String?,
                       enabled: Boolean = true,
                       icon: Icon? = null,
                       selected: Boolean = false,
                       shortcut: Key? = null,
                       perform: (ActionPerform) -> Unit) :
        Action(label, enabled, icon, shortcut, perform) {

    var selected: Boolean by Delegates.observable(selected) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    companion object Statics {
        val selectedSelector: ClassSelector = ".action-selected".toClassSelector()
    }
}