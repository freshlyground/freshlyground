package fg.md.icon

import fg.beans.icon.IconProvider
import fg.elements.Element

class MDIconProvider(val name: String) : IconProvider {

    override fun apply(element: Element) {
        element.addClass("material-icons")
        element.textContent = name
    }

    companion object Statics {
        val face = MDIconProvider("face")
        val expand_more = MDIconProvider("expand_more")
        val expand_less = MDIconProvider("expand_less")
    }
}