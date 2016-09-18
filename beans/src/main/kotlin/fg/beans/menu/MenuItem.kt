package fg.beans.menu

import fg.beans.Action
import fg.beans.SelectableAction
import fg.beans.pkg
import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.HTML
import fg.elements.Span
import fg.elements.StyledClass
import fg.elements.Text
import fg.elements.onClick
import fg.style.ClassRule
import fg.style.rule
import org.w3c.dom.events.Event
import kotlin.reflect.KProperty

class MenuItem(action: Action) : Div() {

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


    override fun render() {
        super.render()

        addClass(classSelector)

        appendChild(primaryText)
        primaryText.appendChild(Text(action.label))
    }

    override fun didMount() {
        super.didMount()

        action.onPropertyChanged(actionPropertyChangedHandler)

        onClick(clickHandler)
    }

    private fun renderSelected(selected: Boolean) {

        if (selected) {
            addClass(SelectableAction.selectedSelector)
        } else {
            removeClass(SelectableAction.selectedSelector)
        }
    }

    companion object MenuItem : StyledClass {

        override val classSelector = ClassSelector("$pkg-menuitem")

        override val rule: ClassRule.() -> Unit = {
            cursor = "pointer"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}