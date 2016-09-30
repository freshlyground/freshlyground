package fg.md.button

import fg.beans.Action
import fg.beans.button.Button
import fg.beans.icon.FontAwesomeIcons
import fg.elements.ClassSelector
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.md.Context
import fg.md.colour.MDColor
import fg.md.support.Ripple
import fg.style.ClassRule
import fg.style.active
import fg.style.and
import fg.style.colour.RgbColor
import fg.style.focus
import fg.style.hover
import kotlin.properties.Delegates
import kotlin.reflect.KProperty

class MDButton(action: Action, type: Type = Type.FLAT,
               color: MDColor = MDColor.DEFAULT,
               margins: Boolean = true) :
        Button(action) {

    var type: Type by Delegates.observable(type) { property, old, new ->
        renderState(new, this.action, this.color)
    }

    var color: MDColor by Delegates.observable(color) { property, old, new ->
        renderState(this.type, this.action, new)
    }

    var margins: Boolean by Delegates.observable(margins) { property, old, new ->
        renderMargins(new)
    }

    private var ripples: Boolean = false

    private val ripple: Ripple by lazy {
        Ripple(element = this,
                startedCallback = {
                    this.ripples = true
                },
                doneCallback = {
                    this.ripples = false
                    renderColor()
                })
    }

    private val actionChangedHandler: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit = {
        action, property, old, new ->

        renderState(this.type, action, this.color)
    }

    override fun render() {
        super.render()

        addClass(MDButton.classSelector)
        renderState(type, action, color)
        renderMargins(margins)
    }

    override fun didMount() {
        super.didMount()

        action.onPropertyChanged(actionChangedHandler)
        ripple.init()
    }

    override fun onHover() {
        renderColor()
    }

    override fun unHover() {
        renderColor()
    }

    override fun onFocus() {
        renderColor()
    }

    override fun unFocus() {
        renderColor()
    }

    override fun onPressed() {
        renderColor()
    }

    override fun unPressed() {
        renderColor()
    }

    private fun renderState(type: Type, action: Action, color: MDColor) {

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

        renderColor(color)

        if (!action.enabled) {
            addClass(DISABLED)
            _disabled = true
        } else {
            removeClass(DISABLED)
            _disabled = false
        }
    }

    private fun renderColor(color: MDColor = this.color) {

        when (type) {
            Type.FLAT -> {
                if (action.enabled) {

                    if (pressed) {
                        this.style.backgroundColor = RgbColor(204, 204, 204).toString()
                    } else if (focused) {
                        this.style.backgroundColor = RgbColor(221, 221, 221).toString()
                    } else if (hovered) {
                        this.style.backgroundColor = RgbColor(153, 153, 153, 0.2).toString()
                    } else {
                        this.style.backgroundColor = RgbColor.TRANSPARENT.toString()
                    }

                    this.style.color = Context.theme.color(color, RgbColor.BLACK).toString()

                } else {
                    this.style.backgroundColor = RgbColor.TRANSPARENT.toString()
                    this.style.color = RgbColor.BLACK.withAlfa(0.26).toString()
                }
            }
            Type.RAISED -> {
                if (action.enabled) {

                    if (pressed) {
                        this.style.backgroundColor = RgbColor(204, 204, 204).toString()
                    } else if (focused) {
                        this.style.backgroundColor = RgbColor(221, 221, 221).toString()
                    } else if (hovered) {
                        this.style.backgroundColor = RgbColor(153, 153, 153, 0.2).toString()
                    } else {
                        this.style.backgroundColor = RgbColor.TRANSPARENT.toString()
                    }

                    //this.style.backgroundColor = Context.theme.color(color, RgbColor.WHITE).toString()
                    this.style.color = RgbColor.BLACK.toString()
                } else {

                }
            }
            Type.FLOATING -> {
                if (action.enabled) {
                    this.style.backgroundColor = Context.theme.color(color, RgbColor.WHITE).toString()
                    this.style.color = RgbColor.BLACK.toString()
                } else {

                }
            }
        }
    }

    private fun renderMargins(enabled: Boolean) {
        if (enabled) {
            style.margin = "8px"
        } else {
            style.margin = "0"
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
        private val DISABLED = "md-button-disabled".toClassSelector()

        private val plusIcon = FontAwesomeIcons.plus()

        override val classSelector = "md-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            borderRadius = "2px"
            marginLeft = "8px"
            marginRight = "8px"
            fontFamily = Context.theme.font

            hover {
                cursor = "pointer"
                and(DISABLED) {
                    cursor = "not-allowed"
                }
            }

            focus {
                outline = "none"
            }

            active {
                //backgroundColor = RgbColor.from("#999999").withAlfa(0.4).toString()
            }

            and(TYPE_FLAT) {
                minWidth = "88px"
                width = ""
                height = "36px"
                boxShadow = "none"
                //backgroundColor = "white"
                border = "none"

                /*hover {
                    not(DISABLED) {
                        backgroundColor = RgbColor(153, 153, 153, 0.2).toString()
                    }
                }*/

                focus {
                    //backgroundColor = "#f2f2f2"
                }

                and(DISABLED) {
                    backgroundColor = RgbColor.TRANSPARENT.toString()
                }
            }

            and(TYPE_RAISED) {
                minWidth = "88px"
                width = ""
                height = "36px"
                //backgroundColor = "white"
                border = "none"
                boxShadow = "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"

                active {
                    boxShadow = "0 4px 8px 0 rgba(0,0,0,.4)"
                }

                /*focus {
                    backgroundColor = "#f2f2f2"
                }*/

                and(DISABLED) {
                    boxShadow = "none"
                    //backgroundColor = RgbColor.BLACK.withAlfa(0.12).toString()
                }
            }


            and(TYPE_FLOATING) {
                width = "40px"
                height = "40px"
                border = "none"
                boxShadow = "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"
                borderRadius = "50%"

                and(DISABLED) {
                    //backgroundColor = RgbColor.TRANSPARENT.toString()
                }
            }

        }

        init {
            HTML.registerStyle(this)
        }
    }
}