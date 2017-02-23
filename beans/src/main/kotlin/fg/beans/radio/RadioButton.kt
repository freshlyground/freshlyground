package fg.beans.radio

import fg.elements.HTML
import fg.elements.InputRadio
import fg.elements.StyledClass
import fg.elements.onClick
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.hover
import org.w3c.dom.events.Event
import kotlin.properties.Delegates

open class RadioButton(checked: Boolean = false) : InputRadio() {

    var checked: Boolean by Delegates.observable(checked) { property, old, new ->
        _checked = new
        notifyCheckedListeners(new)
    }
        private set

    private val checkedListeners: MutableList<(Boolean) -> Unit> = arrayListOf()

    private fun notifyCheckedListeners(checked: Boolean) {
        checkedListeners.forEach { it(checked) }
    }

    fun onChecked(listener: (Boolean) -> Unit) {
        checkedListeners.add(listener)
    }

    fun unChecked(listener: (Boolean) -> Unit) {
        checkedListeners.remove(listener)
    }

    fun toggle() {
        val newState = !this.checked
        this.checked = newState
    }

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    override fun didMount() {
        super.didMount()

        onClick(clickHandler)
    }

    private val clickHandler: (Event) -> Unit = {
        val newState = !this._checked!!
        this._checked = newState
    }

    companion object RadioButton : StyledClass {

        override val classSelector = "bn-radio-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            _background = "red"

            hover {
                _cursor = "pointer"
            }

        }

        init {
            HTML.registerStyle(this)
        }

    }

}