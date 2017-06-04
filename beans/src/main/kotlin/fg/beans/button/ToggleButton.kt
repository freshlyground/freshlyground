package fg.beans.button

import fg.beans.action.Action
import fg.beans.action.SelectableAction
import fg.beans.pkg
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.and
import fg.style.focus
import fg.style.hover
import kotlin.reflect.KProperty

open class ToggleButton(action: SelectableAction) : AbstractButton(action) {

    override val action: SelectableAction = action

    private val actionPropertyChangedHandler: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit = {
        action: Action, property: KProperty<*>, old: Any?, new: Any? ->
        when (property.name) {
            SelectableAction::selected.name -> {
                renderSelected(this.action.selected)
            }
        }
    }

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    private var previousBackgroundColor: String = ""

    private fun renderSelected(selected: Boolean) {
        if (selected) {
            previousBackgroundColor = _style.backgroundColor
            this.iconI.icon = action.selectedIcon
            addClass("selected")
        } else {
            this.iconI.icon = action.deselectedIcon
            removeClass("selected")
        }
    }

    override fun didMount() {
        super.didMount()

        action.onPropertyChanged(actionPropertyChangedHandler)
    }

    fun toggle() {
        this.action.perform(this)
    }

    companion object : StyledClass {

        override val classSelector = "$pkg-toggle-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            _border = "1px outset #e4e4e4"
            _borderRadius = "4px"
            _backgroundColor = "#ffffff"
            _boxShadow = "none"
            _margin = "0"

            hover {
                _cursor = "pointer"
                and(DISABLED) {
                    _cursor = "not-allowed"
                }
            }

            and(".selected") {
                _border = "1px outset rgb(144, 191, 240)"
                _backgroundColor = "rgb(118, 178, 240)"
                _boxShadow = "1px 1px 1px 1px rgba(0, 0, 0, 0.2)"
            }

            focus {
                _border = "1px outset rgb(144, 191, 240)"
                _outline = "none"
            }

            and(".focused") {
                _border = "1px outset rgb(144, 191, 240)"
                _outline = "none"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}