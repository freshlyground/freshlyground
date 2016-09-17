package fg.beans.icon

import fg.elements.I
import kotlin.properties.Delegates

class IconI(icon: Icon? = null) : I() {

    var icon: Icon? by Delegates.observable(icon) {
        property, old, new ->

        renderIcon(icon)
    }

    override fun render() {
        super.render()

        if (icon != null) {
            renderIcon(icon)
        }
    }

    private fun renderIcon(icon: Icon?) {

        icon.apply(this)
    }
}