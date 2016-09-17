package fg.style

import fg.elements.ClassSelector
import fg.elements.IClassStyle
import fg.elements.Selector

class ClassStyle(className: ClassSelector,
                 val parentSelector: Selector? = null) :
        Style(className), IClassStyle {

    override val selector: ClassSelector
        get() = super.selector as ClassSelector

    override val className: String
        get() = selector.value

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



