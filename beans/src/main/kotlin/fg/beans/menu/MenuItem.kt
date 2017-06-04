package fg.beans.menu

import fg.base.OS
import fg.base.OSDetector
import fg.beans.ElementStyle
import fg.beans.action.Action
import fg.beans.action.ActionBean
import fg.beans.action.SelectableAction
import fg.beans.icon.FontAwesomeIcons
import fg.beans.icon.IconI
import fg.beans.pkg
import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.HTML
import fg.elements.Span
import fg.elements.StyledClass
import fg.elements.Text
import fg.elements.onBlur
import fg.elements.onClick
import fg.elements.onFocus
import fg.elements.onMouseDown
import fg.elements.onMouseEnter
import fg.elements.onMouseLeave
import fg.elements.onMouseUp
import fg.elements.toClassSelector
import fg.keyboard.Key
import fg.keyboard.Modifier
import fg.style.ClassRule
import fg.style.and
import fg.style.child
import fg.style.colour.RgbColor
import fg.style.focus
import org.w3c.dom.events.Event
import org.w3c.dom.events.MouseEvent
import kotlin.reflect.KProperty

open class MenuItem(action: Action) : Div(), ActionBean {

    override val action: Action = action

    var hovered: Boolean = false
        private set
    var focused: Boolean = false
        private set
    var pressed: Boolean = false
        private set

    private val beforePerformingActionListeners: MutableList<(action: Action) -> Unit> = arrayListOf()
    private val afterPerformingActionListeners: MutableList<(action: Action) -> Unit> = arrayListOf()

    private val selectedIcon: IconI by lazy {
        val iconI = IconI()
        iconI.icon = FontAwesomeIcons.check()
        iconI.addClass("selected-icon")
        iconI
    }

    private val primaryText: Span by lazy {
        val span = Span()
        span.addClass("primary-text")
        span
    }

    private val secondaryTextSpan: Span by lazy {
        val span = Span()
        span
    }
    private val secondaryText by lazy {
        val div = Div()
        div.addClass("secondary-text")
        div.appendChild(secondaryTextSpan)
        div
    }

    private val actionPropertyChangedHandler: (action: Action, property: KProperty<*>, old: Any?, new: Any?) -> Unit = {
        action: Action, property: KProperty<*>, old: Any?, new: Any? ->

        if (property.name == Action::label.name) {
            primaryText.textContent = action.label
        } else if (property.name == Action::shortcut.name) {
            renderShortcut(action.shortcut)
        } else if (property.name == Action::enabled.name) {
            renderDisabled(action.disabled)
            if (action.enabled) {
                onEnabled()
            } else {
                onDisabled()
            }
        }

        if (action is SelectableAction) {
            if (property.name == SelectableAction::selected.name) {
                renderSelected(action.selected)
            }
        }
    }

    private val clickHandler: (Event) -> Unit = { event ->

        console.log("MenuItem.clicked", event )

        beforePerformingActionListeners.forEach { it(action) }

        if (action is SelectableAction) {
            action.perform(this)
        } else {
            action.perform(this)
        }

        afterPerformingActionListeners.forEach { it(action) }
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
        renderColor()
    }

    open protected fun unHover() {
        renderColor()
    }

    open protected fun onFocus() {
        renderColor()
    }

    open protected fun unFocus() {
        renderColor()
    }

    open protected fun onPressed() {
        renderColor()
    }

    open protected fun unPressed() {
        renderColor()
    }

    open protected fun onEnabled() {
        renderColor()
    }

    open protected fun onDisabled() {
        renderColor()
    }

    override fun render() {
        super.render()

        addClass(classSelector)
        _tabindex = "0"

        if (this.action is SelectableAction) {
            val action = this.action as SelectableAction
            appendChild(selectedIcon)
            renderSelected(action.selected)
        }
        appendChild(primaryText)
        appendChild(secondaryText)

        primaryText.textContent = action.label
        renderShortcut(action.shortcut)
        renderDisabled(action.disabled)
    }

    private fun renderShortcut(key: Key?) {
        secondaryTextSpan.removeChildren()
        if (key != null) {
            for (modifier in key.modifiers.list) {
                if (modifier == Modifier.meta) {
                    if (OSDetector.detected == OS.MAC) {
                        secondaryTextSpan.appendChild(Text("⌘"))
                    } else {
                        secondaryTextSpan.appendChild(Text(modifier.name))
                    }
                } else if (modifier == Modifier.shift) {
                    if (OSDetector.detected == OS.MAC) {
                        secondaryTextSpan.appendChild(Text("⇧"))
                    } else {
                        secondaryTextSpan.appendChild(Text(modifier.name))
                    }
                } else if (modifier == Modifier.alt) {
                    if (OSDetector.detected == OS.MAC) {
                        secondaryTextSpan.appendChild(Text("⌥"))
                    } else {
                        secondaryTextSpan.appendChild(Text(modifier.name))
                    }
                } else {
                    secondaryTextSpan.appendChild(Text(modifier.name))
                }

            }
            secondaryTextSpan.appendChild(Text(key.key.toUpperCase()))
        }
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

    private fun renderSelected(selected: Boolean) {

        if (selected) {
            addClass(SelectableAction.selectedSelector)
            selectedIcon._style.opacity = "1"
        } else {
            removeClass(SelectableAction.selectedSelector)
            selectedIcon._style.opacity = "0"
        }
    }

    private fun renderDisabled(disabled: Boolean) {
        if (disabled) {
            toggleClass(DISABLED.value, true)
        } else {
            toggleClass(DISABLED.value)
        }
    }

    fun onBeforePerformingAction(listener: (action: Action) -> Unit) {
        beforePerformingActionListeners.add(listener)
    }

    fun unBeforePerformingAction(listener: (action: Action) -> Unit) {
        beforePerformingActionListeners.remove(listener)
    }

    fun onAfterPerformingAction(listener: (action: Action) -> Unit) {
        afterPerformingActionListeners.add(listener)
    }

    fun unAfterPerformingAction(listener: (action: Action) -> Unit) {
        afterPerformingActionListeners.remove(listener)
    }

    val menuItemStyle: Style = Style()

    private fun renderColor() {

        if (action.enabled) {
            if (pressed) {

                this.style.color = menuItemStyle.pressed.color
                this.style.backgroundColor = menuItemStyle.pressed.backgroundColor

            } else if (focused) {

                this.style.color = menuItemStyle.focused.color
                this.style.backgroundColor = menuItemStyle.focused.backgroundColor

            } else if (hovered) {
                this.style.color = menuItemStyle.hovered.color
                this.style.backgroundColor = menuItemStyle.hovered.backgroundColor
            } else {
                this.style.color = menuItemStyle.color
                this.style.backgroundColor = menuItemStyle.backgroundColor
            }
        } else {
            this.style.color = menuItemStyle.disabled.color
            this.style.backgroundColor = menuItemStyle.disabled.backgroundColor
        }
    }

    class Style : ElementStyle() {

        override var color: RgbColor? = RgbColor.BLACK
        override var backgroundColor: RgbColor? = RgbColor.WHITE

        var pressed: ElementStyle = object : ElementStyle() {
            override var color: RgbColor? = RgbColor.BLACK
            override var backgroundColor: RgbColor? = RgbColor(153, 153, 153, 0.2)
        }

        var hovered: ElementStyle = object : ElementStyle() {
            override var color: RgbColor? = RgbColor.BLACK
            override var backgroundColor: RgbColor? = RgbColor(153, 153, 153, 0.2)
        }

        var focused: ElementStyle = object : ElementStyle() {
            override var color: RgbColor? = RgbColor.BLACK
            override var backgroundColor: RgbColor? = RgbColor.WHITE
        }

        var disabled: ElementStyle = object : ElementStyle() {
            override var color: RgbColor? = RgbColor.from("#909090")
            override var backgroundColor: RgbColor? = RgbColor.WHITE
        }
    }

    companion object : StyledClass {

        val DISABLED = "disabled".toClassSelector()

        override val classSelector = ClassSelector("$pkg-menu-item")

        override val rule: ClassRule.() -> Unit = {

            _cursor = "pointer"
            _paddingLeft = "8px"
            _paddingRight = "24px"
            _textAlign = "left"

            _display = "flex"
            _flexWrap = "nowrap"
            _flexDirection = "row"
            _alignItems = "center"

            _fontSize = "15px"

            child(".selected-icon") {
                _marginRight = "24px"
                _marginLeft = "0px"

                _flex = "initial"
            }

            child(".primary-text") {
                _flex = "1"
            }

            child(".secondary-text") {
                _marginLeft = "8px"
                _flex = "initial"
            }

            focus {
                _outline = "none"
            }

            and(DISABLED) {
                _cursor = "not-allowed"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}