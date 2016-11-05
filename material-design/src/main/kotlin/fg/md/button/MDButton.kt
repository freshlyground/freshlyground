package fg.md.button

import fg.beans.Action
import fg.beans.ElementStyle
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
import kotlin.properties.Delegates

class MDButton(action: Action, type: Type = Type.FLAT,
               color: MDColor = MDColor.DEFAULT,
               margins: Boolean = false) :
        Button(action) {

    var type: Type by Delegates.observable(type) { property, old, new ->
        renderType(new)
        renderColor(color)
    }

    var color: MDColor by Delegates.observable(color) { property, old, new ->
        renderColor(new)
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

    override fun render() {
        super.render()

        addClass(MDButton.classSelector)
        renderType(type)
        renderColor(color)
        renderMargins(margins)
    }

    override fun didMount() {
        super.didMount()

        ripple.init()
    }

    override fun onEnabled() {
        renderColor()
        removeClass(DISABLED)
    }

    override fun onDisabled() {
        renderColor()
        addClass(DISABLED)
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

    private fun renderType(type: Type) {

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
    }

    private fun renderColor(color: MDColor = this.color) {

        when (type) {
            Type.FLAT -> {
                if (action.enabled) {

                    if (pressed) {
                        this.style.backgroundColor = flatStyle.pressed.backgroundColor
                    } else if (focused) {
                        this.style.backgroundColor = flatStyle.focused.backgroundColor
                    } else if (hovered) {
                        this.style.backgroundColor = flatStyle.hovered.backgroundColor
                    } else {
                        this.style.backgroundColor = flatStyle.backgroundColor
                    }

                    this.style.color = Context.theme.color(color, RgbColor.BLACK)

                } else {
                    this.style.backgroundColor = flatStyle.disabled.backgroundColor
                    this.style.color = flatStyle.disabled.color
                }
            }
            Type.RAISED -> {
                if (action.enabled) {

                    if (pressed) {
                        this.style.backgroundColor = raisedStyle.pressed.backgroundColor
                    } else if (focused) {
                        this.style.backgroundColor = raisedStyle.focused.backgroundColor
                    } else if (hovered) {
                        this.style.backgroundColor = raisedStyle.hovered.backgroundColor
                    } else {
                        this.style.backgroundColor = Context.theme.color(color, RgbColor.TRANSPARENT)
                    }

                    this.style.color = raisedStyle.color

                } else {
                    this.style.color = raisedStyle.disabled.color
                    this.style.backgroundColor = raisedStyle.disabled.backgroundColor
                }
            }
            Type.FLOATING -> {
                if (action.enabled) {
                    this.style.backgroundColor = Context.theme.color(color, RgbColor.WHITE)
                    this.style.color = RgbColor.BLACK
                } else {

                }
            }
        }
    }

    private fun renderMargins(enabled: Boolean) {
        if (enabled) {
            _style.margin = "8px"
        } else {
            _style.margin = "0"
        }
    }

    enum class Type(val selector: ClassSelector) {
        FLAT(TYPE_FLAT),
        RAISED(TYPE_RAISED),
        FLOATING(TYPE_FLOATING)
    }

    val flatStyle: FlatStyle = FlatStyle()
    val raisedStyle: RaisedStyle = RaisedStyle()
    val floatingStyle: FloatingStyle = FloatingStyle()

    class FlatStyle : ElementStyle() {

        override var color: RgbColor? = RgbColor.BLACK
        override var backgroundColor: RgbColor? = RgbColor.TRANSPARENT

        var hovered: ElementStyle = object : ElementStyle() {
            override var backgroundColor: RgbColor? = RgbColor(153, 153, 153, 0.2)
        }

        var pressed: ElementStyle = object : ElementStyle() {
            override var backgroundColor: RgbColor? = RgbColor(204, 204, 204)
        }

        var focused: ElementStyle = object : ElementStyle() {
            override var backgroundColor: RgbColor? = RgbColor(221, 221, 221)
        }

        var disabled: ElementStyle = object : ElementStyle() {
            override var color: RgbColor? = RgbColor.BLACK.withAlfa(0.26)
            override var backgroundColor: RgbColor? = RgbColor.TRANSPARENT
        }
    }

    class RaisedStyle : ElementStyle() {

        override var color: RgbColor? = RgbColor.BLACK
        override var backgroundColor: RgbColor? = RgbColor.TRANSPARENT

        var hovered: ElementStyle = object : ElementStyle() {
            override var backgroundColor: RgbColor? = RgbColor(153, 153, 153, 0.2)
        }

        var pressed: ElementStyle = object : ElementStyle() {
            override var backgroundColor: RgbColor? = RgbColor(204, 204, 204)
        }

        var focused: ElementStyle = object : ElementStyle() {
            override var backgroundColor: RgbColor? = RgbColor(221, 221, 221)
        }

        var disabled: ElementStyle = object : ElementStyle() {
            override var color: RgbColor? = RgbColor.BLACK.withAlfa(0.26)
            override var backgroundColor: RgbColor? = RgbColor(0, 0, 0, 0.12)
        }
    }

    class FloatingStyle : ElementStyle() {

        override var color: RgbColor? = RgbColor.BLACK
        override var backgroundColor: RgbColor? = RgbColor.WHITE

    }

    companion object MDButton : StyledClass {

        private val TYPE_FLAT = "md-button-flat".toClassSelector()
        private val TYPE_RAISED = "md-button-raised".toClassSelector()
        private val TYPE_FLOATING = "md-button-floating".toClassSelector()
        private val plusIcon = FontAwesomeIcons.plus()

        override val classSelector = "md-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            borderRadius = "2px"
            marginLeft = "8px"
            marginRight = "8px"
            fontFamily = Context.theme.font
            fontSize = "14px"
            fontWeight = "500"

            focus {
                outline = "none"
            }

            and(TYPE_FLAT) {
                minWidth = "88px"
                width = ""
                height = "36px"
                boxShadow = "none"
                border = "none"
            }

            and(TYPE_RAISED) {
                minWidth = "88px"
                width = ""
                height = "36px"
                border = "none"
                boxShadow = "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"

                active {
                    boxShadow = "0 4px 8px 0 rgba(0,0,0,.4)"
                }

                and(DISABLED) {
                    boxShadow = "none"
                }
            }


            and(TYPE_FLOATING) {
                width = "40px"
                height = "40px"
                border = "none"
                boxShadow = "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"
                borderRadius = "50%"

                active {
                    boxShadow = "0 4px 8px 0 rgba(0,0,0,.4)"
                }

                and(DISABLED) {
                    boxShadow = "none"
                }
            }

        }

        init {
            HTML.registerStyle(this)
        }
    }
}