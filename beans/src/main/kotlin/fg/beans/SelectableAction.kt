package fg.beans

import fg.elements.ClassSelector
import fg.elements.toClassSelector
import kotlin.properties.Delegates

class SelectableAction(label: String?, enabled: Boolean = true, selected: Boolean = false) :
        Action(label, enabled) {

    var selected: Boolean by Delegates.observable(selected) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    companion object Statics {
        val selectedSelector: ClassSelector = ".action-selected".toClassSelector()
    }
}