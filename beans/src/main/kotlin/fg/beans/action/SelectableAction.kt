package fg.beans.action

import fg.beans.icon.IconProvider
import fg.elements.ClassSelector
import fg.elements.Element
import fg.elements.toClassSelector
import fg.keyboard.Key
import kotlin.properties.Delegates

class SelectableAction(label: String? = null,
                       enabled: Boolean = true,
                       val selectedIcon: IconProvider? = null,
                       val deselectedIcon: IconProvider? = null,
                       selected: Boolean = false,
                       shortcut: Key? = null,
                       perform: ((ActionPerform) -> Unit)? = null) :
        Action(label, enabled, deselectedIcon, shortcut, perform) {

    var selected: Boolean by Delegates.observable(selected) { prop, old, new ->
        notifyPropertyChanged(prop, old, new)
    }

    override fun perform(source: Element) {
        selected = !selected
        super.perform(source)
    }

    companion object Statics {
        val selectedSelector: ClassSelector = ".action-selected".toClassSelector()
    }
}