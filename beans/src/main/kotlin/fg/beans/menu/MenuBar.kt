package fg.beans.menu

import fg.beans.action.Action
import fg.beans.action.SelectableAction
import fg.beans.button.ToggleButton
import fg.beans.pkg
import fg.elements.BODY
import fg.elements.Div
import fg.elements.HTML
import fg.elements.Node
import fg.elements.StyledClass
import fg.elements.computedStyle
import fg.elements.onMouseEnter
import fg.elements.px
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.child

class MenuBar : Div() {

    private val menuButtonByMenu: MutableMap<Menu, ToggleButton> = linkedMapOf()

    private val beforePerformingMenuItemActionHandler: (Action, Menu) -> Unit = { action, menu ->
        //closeMenu(menu)
    }
    private val afterPerformingMenuItemActionHandler: (Action, Menu) -> Unit = { action, menu ->
        closeMenu(menu)
    }

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    override fun childAdded(child: Node) {
        super.childAdded(child)

        if (!(child is Menu || child is MenuButton)) {
            throw IllegalArgumentException("Only a Menu can be added to a MenuBar: " + child::class.js.name)
        }

        if (child is Menu) {

            child.hide()
            val menuButton = MenuButton(SelectableAction(child.label) { actionPerform ->
                actionPerform.action as SelectableAction
                if (actionPerform.action.selected) {
                    openMenu(child)


                } else {
                    child.hide()
                }
            })
            super.appendChild(menuButton)

            menuButtonByMenu.put(child, menuButton)
            child.onBeforePerformingMenuItemAction(beforePerformingMenuItemActionHandler)
            child.onAfterPerformingMenuItemAction(afterPerformingMenuItemActionHandler)

            menuButton.onMouseEnter {

                console.log("MenuButton[${menuButton.action.label}].onMouseEnter")
                val anyMenuOpen = anyMenuOpen()
                console.log("MenuButton[${menuButton.action.label}] anyMenuOpen = " + anyMenuOpen)

                if (anyMenuOpen) {
                    openMenu(child)
                    menuButton.action.selected = true
                }
            }
        }
    }

    private fun anyMenuOpen(): Boolean {
        for (mb in menuButtonByMenu.values) {
            if (mb.action.selected) {
                return true
            }
        }
        return false
    }

    override fun childRemoved(child: Node) {
        super.childRemoved(child)

        if (child is Menu) {
            menuButtonByMenu.remove(child)
        }
    }

    private fun closeOthers(exception: Menu) {
        for (child in childElements) {
            if (child != exception && child is Menu) {
                closeMenu(child)
            }
        }
    }

    private fun openMenu(menu: Menu) {
        closeOthers(menu)
        menu.show()

        val menuButton = menuButtonByMenu[menu]!!
        val left = menuButton.boundingClientRect.left - BODY.computedStyle.marginLeft.px.value

        menu._style.top = "${menuButton.boundingClientRect.height}px"
        menu._style.left = "${left}px"
    }

    private fun closeMenu(menu: Menu) {
        menu.hide()
        menuButtonByMenu[menu]?.action?.selected = false
    }

    companion object : StyledClass {

        override val classSelector = "$pkg-menu-bar".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _position = "relative"

            child(Menu.classSelector) {
                _position = "absolute"
                _border = "1px solid #ccc"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}