package fg.beans.menu

import fg.beans.ActionPerform
import fg.beans.SelectableAction
import fg.beans.button.ToggleButton
import fg.beans.pkg
import fg.elements.BODY
import fg.elements.Div
import fg.elements.HTML
import fg.elements.Node
import fg.elements.StyledClass
import fg.elements.computedStyle
import fg.elements.px
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.child

class MenuBar : Div() {

    private val toggleButtonByMenu: MutableMap<Menu, ToggleButton> = linkedMapOf()

    private val menuButtonActionPerformed: (ActionPerform) -> Unit = {

    }

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    override fun childAdded(child: Node) {
        super.childAdded(child)

        if (!(child is Menu || child is MenuButton)) {
            throw IllegalArgumentException("Only a Menu can be added to a MenuBar: " + child.jsClass.name)
        }

        if (child is Menu) {

            child.hide()
            val toggleButton = MenuButton(SelectableAction(child.label) { actionPerform ->
                actionPerform.action as SelectableAction
                if (actionPerform.action.selected) {
                    hideOthers(child)
                    child.show()

                    val left = actionPerform.source.boundingClientRect.left - BODY.computedStyle.marginLeft.px.value

                    child.style.top = "${actionPerform.source.boundingClientRect.height}px"
                    child.style.left = "${left}px"
                } else {
                    child.hide()
                }
            })
            super.appendChild(toggleButton)
            toggleButtonByMenu.put(child, toggleButton)
        }
    }

    private fun hideOthers(exception: Menu) {
        for (child in childElements) {
            if (child != exception && child is Menu) {
                child.hide()
                toggleButtonByMenu[child]?.action?.selected = false
            }
        }
    }

    companion object MenuBar : StyledClass {

        override val classSelector = "$pkg-menu-bar".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            position = "relative"

            child(Menu.classSelector) {
                position = "absolute"
                border = "1px solid #ccc"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}