package fg.md.button

import fg.beans.Action
import fg.beans.button.Button
import fg.beans.icon.FontAwesomeIcons
import fg.elements.ClassSelector
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.onMouseDown
import fg.elements.onMouseUp
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.active
import fg.style.and
import fg.style.colour.RgbColor
import fg.style.focus
import org.w3c.dom.events.Event
import kotlin.properties.Delegates
import kotlin.reflect.KProperty

class MDButton(action: Action, type: Type = Type.FLAT) :
        Button(action) {

    var type: Type by Delegates.observable(type) {
        property, old, new ->

        renderState(new, this.action)
    }

    override fun render() {
        super.render()

        addClass(MDButton.classSelector)
        renderState(type, action)
    }

    override fun didMount() {
        super.didMount()

        onMouseDown(handleMouseDown)
        onMouseUp(handleMouseUp)

        action.onPropertyChanged(handleActionChanged)
    }

    private val handleActionChanged: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit = {
        action, property, old, new ->

        renderState(type, action)
    }

    private val handleMouseDown: (Event) -> Unit = { event ->

        if (action.enabled) {
            addClass(PRESSED)
        }
    }

    private val handleMouseUp: (Event) -> Unit = { event ->
        removeClass(PRESSED)
    }

    private fun renderState(type: Type, action: Action) {

        for (c in Type.values()) {
            if (c != type) {
                removeClass(c.selector)
            }
        }
        addClass(type.selector)

        when (type) {
            Type.FLAT -> {
                icon.hide()
                label.textContent = action.label
                label.show()
            }
            Type.RAISED -> {

                icon.hide()
                label.textContent = action.label
                label.show()
            }
            Type.FLOATING -> {
                label.hide()
                label.textContent = null
                icon.show()
                icon.icon = MDButton.plusIcon
            }
        }

        if (!action.enabled) {
            addClass(DISABLED)
            _disabled = true
        } else {
            removeClass(DISABLED)
            _disabled = false
        }
    }

    enum class Type(val selector: ClassSelector) {
        FLAT(TYPE_FLAT),
        RAISED(TYPE_RAISED),
        FLOATING(TYPE_FLOATING)
    }

    companion object MDButton : StyledClass {

        private val TYPE_FLAT = "md-button-flat".toClassSelector()
        private val TYPE_RAISED = "md-button-raised".toClassSelector()
        private val TYPE_FLOATING = "md-button-floating".toClassSelector()
        private val PRESSED = "md-button-pressed".toClassSelector()
        private val DISABLED = "md-button-disabled".toClassSelector()

        private val plusIcon = FontAwesomeIcons.plus()

        override val classSelector = "md-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            borderRadius = "2px"

            focus {
                outline = "none"
            }

            and(TYPE_FLAT) {
                minWidth = "88px"
                width = ""
                height = "36px"
                boxShadow = "none"
                backgroundColor = "white"
                border = "none"

                and(DISABLED) {
                    backgroundColor = RgbColor.TRANSPARENT.toString()
                }
            }

            and(TYPE_RAISED) {
                minWidth = "88px"
                width = ""
                height = "36px"
                backgroundColor = "white"
                border = "none"
                boxShadow = "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"

                active {
                    boxShadow = "0 4px 8px 0 rgba(0,0,0,.4)"
                }

                and(DISABLED) {
                    boxShadow = "none"
                    backgroundColor = RgbColor.BLACK.withAlfa(0.12).toString()
                }
            }


            and(TYPE_FLOATING) {
                width = "40px"
                height = "40px"
                backgroundColor = "white"
                border = "none"
                boxShadow = "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"
                borderRadius = "50%"

                and(DISABLED) {
                    backgroundColor = RgbColor.TRANSPARENT.toString()
                }
            }

            and(PRESSED) {
                backgroundColor = RgbColor.from("#999999").withAlfa(0.4).toString()
            }

            active {
                backgroundColor = RgbColor.from("#999999").withAlfa(0.4).toString()
            }


        }

        init {
            HTML.registerStyle(this)
        }
    }
}