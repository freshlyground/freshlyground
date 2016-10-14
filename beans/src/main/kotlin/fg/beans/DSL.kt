package fg.beans

import fg.base.Side
import fg.beans.button.Button
import fg.beans.button.ToggleButton
import fg.beans.drawer.Drawer
import fg.beans.link.Anchor
import fg.beans.link.Link
import fg.beans.menu.Menu
import fg.beans.menu.MenuBar
import fg.beans.menu.MenuItem
import fg.elements.Element
import fg.elements.initAndAppendNode

fun Element.anchor(link: Link<*>? = null, target: String = "_blank", useDisplay: Boolean = true, init: Anchor.() -> Unit) = initAndAppendNode(Anchor(link, target, useDisplay), init)
fun Element.button(action: Action, init: Button.() -> Unit) = initAndAppendNode(Button(action), init)
fun Element.drawer(side: Side, init: Drawer.() -> Unit) = initAndAppendNode(Drawer(side), init)
fun Element.menuBar(init: MenuBar.() -> Unit) = initAndAppendNode(MenuBar(), init)
fun Element.menu(label: String? = null, init: Menu.() -> Unit) = initAndAppendNode(Menu(label = label), init)
fun Menu.menuItem(action: Action, init: MenuItem.() -> Unit) = initAndAppendNode(MenuItem(action), init)
fun Element.toggleButton(action: SelectableAction, init: ToggleButton.() -> Unit) = initAndAppendNode(ToggleButton(action), init)
