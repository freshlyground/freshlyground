package fg.beans.button

import fg.beans.Action
import fg.beans.icon.Icon
import fg.beans.icon.IconI
import fg.elements.Button
import fg.elements.HTML
import fg.elements.Span
import fg.elements.StyledClass
import fg.elements.onClick
import fg.elements.toClassSelector
import fg.style.ClassRule
import org.w3c.dom.events.Event
import kotlin.reflect.KProperty

open class Button(action: Action) : Button() {

    val action: Action = action

    protected val label: Span by lazy {
        val span = Span()
        span.hide()
        span
    }

    protected val icon: IconI by lazy {
        val iconI = IconI(this.action.icon)
        iconI.hide()
        iconI
    }

    override fun render() {
        super.render()

        addClass(classSelector)

        appendChild(icon)
        appendChild(label)

        renderIcon(action.icon)
        renderLabel(action.label)
    }

    override fun didMount() {
        super.didMount()

        action.onPropertyChanged(actionPropertyChangedHandler)
        onClick(clickHandler)
    }

    private val clickHandler: (Event) -> Unit = {

        this.action.perform()
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

    companion object Button : StyledClass {

        override val classSelector = "button".toClassSelector()
        override val rule: ClassRule.() -> Unit = {

        }

        init {
            HTML.registerStyle(this)
        }
    }
}