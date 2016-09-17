package fg.beans

import fg.beans.button.Button
import fg.beans.menu.Menu
import fg.beans.menu.MenuItem
import fg.elements.Element
import fg.elements.initAndAppendNode

fun Element.menu(init: Menu.() -> Unit) = initAndAppendNode(Menu(), init)
fun Menu.menuItem(action: Action, init: MenuItem.() -> Unit) = initAndAppendNode(MenuItem(action), init)
fun Element.button(action: Action, init: Button.() -> Unit) = initAndAppendNode(Button(action), init)
