package fg.beans.button

import fg.beans.Action
import fg.beans.icon.Icon
import fg.beans.icon.IconI
import fg.elements.Button
import fg.elements.Span
import fg.style.classStyle
import kotlin.reflect.KProperty

class Button(action: Action) : Button() {

    val action: Action = action

    private val label: Span by lazy {
        val span = Span()
        span.hide()
        span
    }

    private val icon: IconI by lazy {
        val iconI = IconI(action.icon)
        iconI.hide()
        iconI
    }

    override val styleClass = classStyle {
        cursor = "pointer"
    }

    override fun render() {
        super.render()

        appendChild(icon)
        appendChild(label)

        renderIcon(action.icon)
        renderLabel(action.label)
    }

    override fun didMount() {
        super.didMount()

        action.onPropertyChanged(actionPropertyChangedHandler)
    }

    private val actionPropertyChangedHandler: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit = {
        action: Action, property: KProperty<*>, old: Any?, new: Any? ->

        when (property.name) {
            Action::label.name -> {
                renderLabel(action.label)
            }
            Action::icon.name -> {
                renderIcon(action.icon)
            }
        }
    }

    private fun renderLabel(labelText: String?) {
        if (labelText != null) {
            this.label.textContent = labelText
            this.label.show()
        } else {
            this.label.hide()
        }
    }

    private fun renderIcon(icon: Icon?) {
        if (icon == null) {
            this.icon.hide()
        } else {
            icon.apply(this.icon)
            this.icon.show()
        }
    }
}