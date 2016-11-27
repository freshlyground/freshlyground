package fg.elements.style.typed

class Flex(val number: Int?, val keyword: Keyword? = null) {

    override fun toString(): String {
        if (keyword != null) {
            return keyword.name
        }
        return number!!.toString()
    }

    enum class Keyword {
        initial,
        auto,
        none
    }

    companion object Statics {
        val initial = Flex(number = null, keyword = Keyword.initial)
        val auto = Flex(number = null, keyword = Keyword.auto)
        val none = Flex(number = null, keyword = Keyword.none)
    }
}

fun String.toFlex(): Flex {
    val keyword = Flex.Keyword.values().find { it.name == this }
    if (keyword != null) {
        return Flex(number = null, keyword = keyword)
    }
    val number = safeParseInt(this) ?: throw IllegalArgumentException("String could not be parsed as Int: " + this)
    return Flex(number = number, keyword = null)
}