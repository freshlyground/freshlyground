package fg.beans

import fg.beans.action.SelectableAction
import fg.elements.Element

val pkg: String = "fg-bn"

fun Element.collapseOn(action: SelectableAction) {
    action.onPropertyChanged({ _, property, _, _ ->
        when (property.name) {
            SelectableAction::selected.name -> {
                if(action.selected) {
                    this.show()
                }
                else {
                    this.hide()
                }
            }
        }
    })
}