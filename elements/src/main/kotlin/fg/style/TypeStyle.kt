package fg.style

import fg.elements.Selector
import fg.elements.IStyle
import fg.elements.TypeSelector

class TypeStyle(selector: TypeSelector,
                val parentSelector: Selector? = null) :
        Style(selector), IStyle {

    override fun toCss(): List<String> {

        val rules: MutableList<String> = arrayListOf()

        var s = ""
        if (parentSelector != null) {
            s += parentSelector.toString() + " "
        }
        s += selector.toString() + " { "
        for ((key, value) in map) {

            s += key + ": " + value + "; "

        }
        s += "}"

        rules.add(s)

        for (child in childStyles) {
            rules.addAll(child.toCss())
        }

        return rules
    }
}

