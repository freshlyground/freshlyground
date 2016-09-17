package fg.style

import fg.elements.IStyle
import fg.elements.Selector
import fg.elements.TypeSelector

class TypeStyle(selector: TypeSelector,
                val parentSelector: Selector? = null) :
        Style(selector), IStyle {

    override fun toCss(): List<String> {

        val rules: MutableList<String> = arrayListOf()

        if (isNotEmpty()) {
            var s = ""
            if (parentSelector != null) {
                s += parentSelector.toString() + " "
            }
            s += selector.toString() + " { "
            for ((key, value) in _map) {

                s += key + ": " + value + "; "

            }
            s += "}"
            rules.add(s)
        }

        for (child in _childStyles) {
            rules.addAll(child.toCss())
        }

        return rules
    }
}

