package fg.elements.style.typed

class FlexShrink(val number: Double? = null, val keyword: Keyword? = null) {

    override fun toString(): String {
        if (keyword != null) {
            return keyword.toString()
        }
        return number.toString()
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
        val inherit = FlexShrink(keyword = FlexShrink.Keyword.inherit)
        val initial = FlexShrink(keyword = FlexShrink.Keyword.initial)
        val unset = FlexShrink(keyword = FlexShrink.Keyword.unset)
    }
}

fun String.toFlexShrink(): FlexShrink {
    val keyword = FlexShrink.Keyword.values().find { it.name == this }
    if (keyword != null) {
        return FlexShrink(number = null, keyword = keyword)
    }
    val number = safeParseDouble(this) ?: throw IllegalArgumentException("String could not be parsed as Double: " + this)
    return FlexShrink(number = number, keyword = null)
}