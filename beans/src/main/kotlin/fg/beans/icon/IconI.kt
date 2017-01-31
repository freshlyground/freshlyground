package fg.beans.icon

import fg.elements.I
import kotlin.properties.Delegates

class IconI(icon: IconProvider? = null) : I() {

    var icon: IconProvider? by Delegates.observable(icon) {
        property, old, new ->

        renderIcon(new)
    }

    override fun render() {
        super.render()

        if (icon != null) {
            renderIcon(icon)
        }
    }

    private fun renderIcon(icon: IconProvider?) {

        icon?.apply(this)
    }
}