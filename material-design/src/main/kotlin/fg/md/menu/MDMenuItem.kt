package fg.md.menu

import fg.beans.Action
import fg.beans.menu.MenuItem
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.md.pkg
import fg.md.support.Ripple
import fg.style.ClassRule
import fg.style.colour.RgbColor

class MDMenuItem(action: Action) : MenuItem(action) {

    private val ripple: Ripple by lazy {
        Ripple(element = this,
                inkColor = RgbColor.BLUE,
                startedCallback = {
                    //this.ripples = true
                },
                doneCallback = {
                    //this.ripples = false
                    //renderColor()
                })
    }

    override fun render() {
        super.render()

        addClass(MDMenuItem.classSelector)

        menuItemStyle.hovered.backgroundColor = RgbColor(153, 153, 153, 0.2)
    }

    override fun didMount() {
        super.didMount()

        ripple.init()
    }

    companion object MDMenuItem : StyledClass {

        override val classSelector = "$pkg-menu-item".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            fontFamily = "Roboto, 'Helvetica Neue', sans-serif"
            height = "32px"
            paddingLeft = "24px"
            paddingRight = "24px"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}