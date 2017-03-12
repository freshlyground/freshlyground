import fg.base.Side
import fg.beans.action.Action
import fg.beans.action.SelectableAction
import fg.beans.app.AppBar
import fg.beans.app.Application
import fg.beans.app.DrawerNavigation
import fg.beans.deck.Deck
import fg.beans.drawer.dock
import fg.elements.BODY
import fg.elements.Div
import fg.elements.style.typed.Display
import fg.elements.style.typed.FlexDirection
import fg.md.app.MDAppBar
import fg.md.button.MDToggleButton
import fg.md.drawer.MDDrawer
import fg.md.icon.MDIconProvider
import fg.md.menu.MDMenu
import fg.md.menu.MDMenuItem

object SeedSaversApp : Application() {

    private val navAction: SelectableAction by lazy {
        SelectableAction(selectedIcon = MDIconProvider.reorder,
                deselectedIcon = MDIconProvider.reorder) { actionPerform ->

            val selectableAction = actionPerform.action as SelectableAction
            if (selectableAction.selected) {
                leftDrawer.hide()
            } else {
                leftDrawer.show()
            }
        }
    }
    private val appBar: AppBar by lazy {
        val bar = MDAppBar()
        bar.appendChild(MDToggleButton(drawerNavigation.navAction))
        bar
    }
    private val mainPanel: Div by lazy {
        val div = Div()
        div.addClass("main-panel")
        div
    }
    private val deckPanel: Deck by lazy {
        val deck = Deck()
        deck.appendChild(myPlantsPanel)
        deck.appendChild(myOfferingsPanel)
        deck
    }
    private val myPlantsPanel: MyPlantsPanel by lazy {
        MyPlantsPanel()
    }
    private val myOfferingsPanel: MyOfferingsPanel by lazy {
        MyOfferingsPanel()
    }
    private val navMyPlants: Action by lazy {
        Action("My plants") {
            deckPanel.show(myPlantsPanel)
        }
    }
    private val navMyOfferings: Action by lazy {
        Action("My offerings") {
            deckPanel.show(myOfferingsPanel)
        }
    }
    private val navigationMenu: MDMenu by lazy {
        val menu = MDMenu()
        menu.appendChild(MDMenuItem(navMyPlants))
        menu.appendChild(MDMenuItem(navMyOfferings))
        menu
    }
    private val leftDrawer: MDDrawer by lazy {
        val drawer = MDDrawer(Side.LEFT)
        drawer
    }
    private val drawerNavigation: DrawerNavigation by lazy {
        DrawerNavigation(icon = MDIconProvider.reorder,
                drawer = leftDrawer,
                dockingStation = mainPanel,
                initialFloatState = false,
                menu = navigationMenu)
    }

    override fun render() {
        super.render()

        BODY._style.margin = "0"

        CONTENT.style.display = Display.flex
        CONTENT.style.flexDirection = FlexDirection.column
        mainPanel.style.display = Display.flex
        mainPanel.style.flexDirection = FlexDirection.row
        mainPanel.appendChild(deckPanel)

        leftDrawer.appendChild(navigationMenu)

        CONTENT.appendChild(appBar)
        CONTENT.appendChild(mainPanel)

        drawerNavigation
    }
}

