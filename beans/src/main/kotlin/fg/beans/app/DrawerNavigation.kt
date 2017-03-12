package fg.beans.app

import fg.beans.action.Action
import fg.beans.action.SelectableAction
import fg.beans.drawer.Drawer
import fg.beans.drawer.dock
import fg.beans.icon.IconProvider
import fg.beans.menu.Menu
import fg.elements.Element
import kotlin.properties.Delegates

class DrawerNavigation(val icon: IconProvider,
                       val drawer: Drawer,
                       val dockingStation: Element,
                       initialFloatState: Boolean,
                       val menu: Menu) {

    var float: Boolean by Delegates.observable(initialFloatState) { property, old, new ->

        if(new != old) {
            renderFloat(new)
        }
    }

    val navAction: SelectableAction by lazy {
        SelectableAction(selectedIcon = icon,
                deselectedIcon = icon) { actionPerform ->

            val selectableAction = actionPerform.action as SelectableAction

            if (drawer.hidden) {
                drawer.show()
            }
        }
    }
    private val dockingStationResizeHandler: (Element.ResizedEvent) -> Unit = { event ->
        if (event.widthChanged) {
            val float = event.width <= 600
            if(float && !this.float) {
                this.float = true
            }
            else if(!float && this.float) {
                this.float = false
            }
        }
    }
    private val menuHandler: (Action, Menu) -> Unit = { action, menu ->

        if (float) {
            drawer.hide()
        }
    }

    init {
        renderFloat(initialFloatState)
        dockingStation.onResized(dockingStationResizeHandler)
        menu.onAfterPerformingMenuItemAction(menuHandler)
    }

    private fun renderFloat(float: Boolean) {


        if (float) {
            drawer.float()
            dockingStation.appendChild(drawer)
            drawer.hide()

        } else {
            dockingStation.dock(drawer)
            drawer.show()
        }
    }
}