package fg.elements.style.typed

class FlexGrow(val number: Double? = null, val keyword: Keyword? = null) {

    override fun toString(): String {
        if (keyword != null) {
            return keyword.toString()
        }
        return number!!.toString()
    }

    enum class Keyword() {
        inherit,
        initial,
        unset;

        override fun toString(): String {
            return name
        }
    }

    companion object Statics {
        val inherit = FlexGrow(keyword = FlexGrow.Keyword.inherit)
        val initial = FlexGrow(keyword = FlexGrow.Keyword.initial)
        val unset = FlexGrow(keyword = FlexGrow.Keyword.unset)
    }
}

fun String.toFlexGrow(): FlexGrow {
    val keyword = FlexGrow.Keyword.values().find { it.name == this }
    if (keyword != null) {
        return FlexGrow(number = null, keyword = keyword)
    }
    val number = safeParseDouble(this) ?: throw IllegalArgumentException("String could not be parsed as Double: " + this)
    return FlexGrow(number = number, keyword = null)
}