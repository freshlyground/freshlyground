package fg.beans.button

import fg.beans.Action
import fg.beans.SelectableAction
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

    override fun onBeforeActionPerform() {
        super.onBeforeActionPerform()
        this.action.selected = !this.action.selected
    }

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    private var previousBackgroundColor: String = ""

    private fun renderSelected(selected: Boolean) {
        if (selected) {
            previousBackgroundColor = style.backgroundColor
            addClass("selected")
        } else {
            removeClass("selected")
        }
    }

    override fun didMount() {
        super.didMount()

        action.onPropertyChanged(actionPropertyChangedHandler)
    }

    fun toggle() {
        this.onBeforeActionPerform()
        this.action.perform(this)
    }

    companion object ToggleButton : StyledClass {

        override val classSelector = "$pkg-toggle-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            border = "1px outset #e4e4e4"
            borderRadius = "4px"
            backgroundColor = "#ffffff"
            boxShadow = "none"
            margin = "0"

            hover {
                cursor = "pointer"
                and(DISABLED) {
                    cursor = "not-allowed"
                }
            }

            and(".selected") {
                border = "1px outset rgb(144, 191, 240)"
                backgroundColor = "rgb(118, 178, 240)"
                boxShadow = "1px 1px 1px 1px rgba(0, 0, 0, 0.2)"
            }

            focus {
                border = "1px outset rgb(144, 191, 240)"
                outline = "none"
            }

            and(".focused") {
                border = "1px outset rgb(144, 191, 240)"
                outline = "none"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}