package fg.beans.menu

import fg.beans.Action
import fg.beans.SelectableAction
import fg.beans.pkg
import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.Span
import fg.elements.Text
import fg.elements.onClick
import fg.style.classStyle
import org.w3c.dom.events.Event
import kotlin.reflect.KProperty

class MenuItem(action: Action) : Div() {

    override val styleClassPrefix = pkg

    val action: Action = action

    private val primaryText: Span by lazy {
        Span()
    }

    private val actionPropertyChangedHandler: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit = {
        action: Action, property: KProperty<*>, old: Any?, new: Any? ->

        if (property.name == Action::label.name) {
            primaryText.textContent = action.label
        }

        if (action is SelectableAction) {
            if (property.name == SelectableAction::selected.name) {
                renderSelected(action.selected)
            }
        }
    }

    private val clickHandler: (Event) -> Unit = {

        if (action is SelectableAction) {
            action.selected = !action.selected
        }
    }

    private fun renderSelected(selected: Boolean) {

        if (selected) {
            addClass(SelectableAction.selectedSelector)
        } else {
            removeClass(SelectableAction.selectedSelector)
        }
    }

    override val styleClass = classStyle {
        cursor = "pointer"
    }

    override fun render() {
        super.render()

        appendChild(primaryText)
        primaryText.appendChild(Text(action.label))
    }

    override fun didMount() {
        super.didMount()

        action.onPropertyChanged(actionPropertyChangedHandler)

        onClick(clickHandler)
    }

    companion object Statics {

        val selector: ClassSelector = ClassSelector("$pkg-menuitem")
    }
}