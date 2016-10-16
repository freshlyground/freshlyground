package fg.beans.menu

import fg.base.OS
import fg.base.OSDetector
import fg.beans.Action
import fg.beans.ActionBean
import fg.beans.SelectableAction
import fg.beans.icon.FontAwesomeIcons
import fg.beans.icon.IconI
import fg.beans.pkg
import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.HTML
import fg.elements.Span
import fg.elements.StyledClass
import fg.elements.Text
import fg.elements.onClick
import fg.keyboard.Key
import fg.keyboard.Modifier
import fg.style.ClassRule
import fg.style.child
import fg.style.focus
import fg.style.hover
import org.w3c.dom.events.Event
import kotlin.reflect.KProperty

class MenuItem(action: Action) : Div(), ActionBean {

    override val action: Action = action

    private val beforePerformingActionListeners: MutableList<(action: Action) -> Unit> = arrayListOf()
    private val afterPerformingActionListeners: MutableList<(action: Action) -> Unit> = arrayListOf()

    private val selectedIcon: IconI by lazy {
        val iconI = IconI()
        iconI.icon = FontAwesomeIcons.check()
        iconI.addClass("selected-icon")
        iconI.style.opacity = "0"
        //iconI.style.display = "inline"
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
        }

        if (action is SelectableAction) {
            if (property.name == SelectableAction::selected.name) {
                renderSelected(action.selected)
            }
        }
    }

    private val clickHandler: (Event) -> Unit = {

        beforePerformingActionListeners.forEach { it(action) }

        if (action is SelectableAction) {
            action.selected = !action.selected
            action.perform(this)
        } else {
            action.perform(this)
        }

        afterPerformingActionListeners.forEach { it(action) }
    }


    override fun render() {
        super.render()

        addClass(classSelector)
        _tabindex = "0"

        appendChild(selectedIcon)
        appendChild(primaryText)
        appendChild(secondaryText)

        primaryText.textContent = action.label
        renderShortcut(action.shortcut)
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
    }

    private fun renderSelected(selected: Boolean) {

        if (selected) {
            addClass(SelectableAction.selectedSelector)
            selectedIcon.style.opacity = "1"
        } else {
            removeClass(SelectableAction.selectedSelector)
            selectedIcon.style.opacity = "0"
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

    companion object MenuItem : StyledClass {

        override val classSelector = ClassSelector("$pkg-menu-item")

        override val rule: ClassRule.() -> Unit = {

            cursor = "pointer"
            paddingLeft = "8px"
            paddingRight = "24px"
            textAlign = "left"

            display = "flex"
            flexWrap = "nowrap"

            child(".selected-icon") {
                marginRight = "2px"
                flex = "initial"
            }

            child(".primary-text") {
                //marginLeft = "8px"
                flex = "1"
            }

            child(".secondary-text") {
                marginLeft = "8px"
                flex = "initial"
            }

            hover {
                backgroundColor = "#ccc"
            }

            focus {
                outline = "none"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}