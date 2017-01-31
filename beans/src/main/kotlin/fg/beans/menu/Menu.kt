package fg.beans.menu

import fg.beans.action.Action
import fg.beans.pkg
import fg.elements.ClassSelector
import fg.elements.Div
import fg.elements.HTML
import fg.elements.Node
import fg.elements.StyledClass
import fg.keyboard.Key
import fg.style.ClassRule
import fg.style.colour.RgbColor
import kotlin.properties.Delegates

open class Menu(label: String? = null, shortcut: Key? = null) : Div() {

    private val beforePerformingMenuItemActionListeners: MutableList<(action: Action, fg.beans.menu.Menu) -> Unit> = arrayListOf()
    private val afterPerformingMenuItemActionListeners: MutableList<(action: Action, fg.beans.menu.Menu) -> Unit> = arrayListOf()

    private val beforePerformingMenuItemActionHandler: (Action) -> Unit = { action ->
        beforePerformingMenuItemActionListeners.forEach { it(action, this) }
    }

    private val afterPerformingMenuItemActionHandler: (Action) -> Unit = { action ->
        afterPerformingMenuItemActionListeners.forEach { it(action, this) }
    }

    var label: String? by Delegates.observable(label) { property, old, new ->

    }
    var shortcut: Key? by Delegates.observable(shortcut) { property, old, new ->

    }

    fun onBeforePerformingMenuItemAction(listener: (Action, fg.beans.menu.Menu) -> Unit) {
        beforePerformingMenuItemActionListeners.add(listener)
    }

    fun unBeforePerformingMenuItemAction(listener: (Action, fg.beans.menu.Menu) -> Unit) {
        beforePerformingMenuItemActionListeners.remove(listener)
    }

    fun onAfterPerformingMenuItemAction(listener: (Action, fg.beans.menu.Menu) -> Unit) {
        afterPerformingMenuItemActionListeners.add(listener)
    }

    fun unAfterPerformingMenuItemAction(listener: (Action, fg.beans.menu.Menu) -> Unit) {
        afterPerformingMenuItemActionListeners.remove(listener)
    }

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    override fun childAdded(child: Node) {
        super.childAdded(child)

        if (child is MenuItem) {
            child.onBeforePerformingAction(beforePerformingMenuItemActionHandler)
            child.onAfterPerformingAction(afterPerformingMenuItemActionHandler)
        }
    }

    companion object Menu : StyledClass {

        override val classSelector: ClassSelector = ClassSelector("$pkg-menu")
        override val rule: ClassRule.() -> Unit = {
            display = "inline-block"
            paddingTop = "4px"
            paddingBottom = "4px"
            backgroundColor = RgbColor.WHITE.toString()
        }

        init {
            HTML.registerStyle(this)
        }
    }
}