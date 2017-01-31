package fg.beans.button

import fg.beans.action.Action
import fg.beans.action.ActionBean
import fg.beans.icon.IconI
import fg.beans.icon.IconProvider
import fg.elements.Button
import fg.elements.Span
import fg.elements.onBlur
import fg.elements.onClick
import fg.elements.onFocus
import fg.elements.onMouseDown
import fg.elements.onMouseEnter
import fg.elements.onMouseLeave
import fg.elements.onMouseUp
import fg.elements.toClassSelector
import fg.elements.unBlur
import fg.elements.unFocus
import fg.elements.unMouseDown
import fg.elements.unMouseEnter
import fg.elements.unMouseLeave
import fg.elements.unMouseUp
import org.w3c.dom.events.Event
import org.w3c.dom.events.MouseEvent
import kotlin.reflect.KProperty

abstract class AbstractButton(action: Action) : Button(), ActionBean {

    override val action: Action = action

    var hovered: Boolean = false
        private set
    var focused: Boolean = false
        private set
    var pressed: Boolean = false
        private set

    protected val label: Span by lazy {
        val span = Span()
        span.hide()
        span
    }

    protected val iconI: IconI by lazy {
        val iconI = IconI(this.action.icon)
        iconI.hide()
        iconI
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
            Action::enabled.name -> {

                renderDisabled(action.disabled)
                if (action.enabled) {
                    onEnabled()
                } else {
                    onDisabled()
                }
            }
        }
    }

    private val clickHandler: (Event) -> Unit = {

        this.action.perform(this)
    }

    private val mouseEnterHandler: (event: MouseEvent) -> Unit = {

        hovered = true
        toggleClass("hovered", true)
        onHover()
    }

    private val mouseLeaveHandler: (event: MouseEvent) -> Unit = {

        hovered = false
        toggleClass("hovered")
        unHover()
    }

    private val focusHandler: (event: Event) -> Unit = {

        focused = true
        toggleClass("focused", true)
        onFocus()
    }

    private val blurHandler: (event: Event) -> Unit = {

        focused = false
        toggleClass("focused")
        unFocus()
    }

    private val mouseDownHandler: (MouseEvent) -> Unit = { event ->

        if (action.enabled) {
            pressed = true
            toggleClass("pressed", true)
            onPressed()
        }
    }

    private val mouseUpHandler: (Event) -> Unit = { event ->

        pressed = false
        toggleClass("pressed")
        unPressed()
    }

    open protected fun onHover() {

    }

    open protected fun unHover() {

    }

    open protected fun onFocus() {

    }

    open protected fun unFocus() {

    }

    open protected fun onPressed() {

    }

    open protected fun unPressed() {

    }

    open protected fun onEnabled() {

    }

    open protected fun onDisabled() {

    }

    override fun render() {
        super.render()

        appendChild(iconI)
        appendChild(label)

        renderIcon(action.icon)
        renderLabel(action.label)
        renderDisabled(action.disabled)
    }

    override fun didMount() {
        super.didMount()

        action.onPropertyChanged(actionPropertyChangedHandler)
        onClick(clickHandler)

        onMouseEnter(mouseEnterHandler)
        onMouseLeave(mouseLeaveHandler)
        onFocus(focusHandler)
        onBlur(blurHandler)
        onMouseDown(mouseDownHandler)
        onMouseUp(mouseUpHandler)
    }

    override fun willUnMount() {
        super.willUnMount()

        unMouseEnter(mouseEnterHandler)
        unMouseLeave(mouseLeaveHandler)
        unFocus(focusHandler)
        unBlur(blurHandler)
        unMouseDown(mouseDownHandler)
        unMouseUp(mouseUpHandler)
    }

    private fun renderLabel(labelText: String?) {
        if (labelText != null) {
            this.label.textContent = labelText
            this.label.show()
        } else {
            this.label.hide()
        }
    }

    private fun renderIcon(icon: IconProvider?) {
        if (icon == null) {
            this.iconI.hide()
        } else {
            icon.apply(this.iconI)
            this.iconI.show()
        }
    }

    private fun renderDisabled(disabled: Boolean) {
        if (disabled) {
            toggleClass(DISABLED.value, true)
            _disabled = true
        } else {
            toggleClass(DISABLED.value)
            _disabled = false
        }
    }

    companion object AbstractButton {

        val DISABLED = "disabled".toClassSelector()

    }
}