package fg.elements.style.typed

import fg.elements.Dimension
import fg.elements.toDimension

class FlexBasis(val dimension: Dimension? = null, val keyword: Keyword? = null) {

    override fun toString(): String {
        if (keyword != null) {
            return keyword.toString()
        }
        return dimension!!.toString()
    }

    enum class Keyword(val asString: String) {
        inherit("inherit"),
        initial("initial"),
        unset("unset"),
        auto("auto"),
        fill("fill"),
        content("content"),
        maxContent("max-content"),
        minContent("min-content"),
        fitContent("fit-content");

        override fun toString(): String {
            return asString
        }
    }

    companion object Statics {
        val inherit = FlexBasis(keyword = FlexBasis.Keyword.inherit)
        val initial = FlexBasis(keyword = FlexBasis.Keyword.initial)
        val unset = FlexBasis(keyword = FlexBasis.Keyword.unset)
        val auto = FlexBasis(keyword = FlexBasis.Keyword.auto)
        val fill = FlexBasis(keyword = FlexBasis.Keyword.fill)
        val content = FlexBasis(keyword = FlexBasis.Keyword.content)
        val maxContent = FlexBasis(keyword = FlexBasis.Keyword.maxContent)
        val minContent = FlexBasis(keyword = FlexBasis.Keyword.minContent)
        val fitContent = FlexBasis(keyword = FlexBasis.Keyword.fitContent)
    }
}

fun String.toFlexBasis(): FlexBasis {
    val keyword = FlexBasis.Keyword.values().find { it.name == this }
    if (keyword != null) {
        return FlexBasis(dimension = null, keyword = keyword)
    }
    val dimension = this.toDimension()
    return FlexBasis(dimension = dimension, keyword = null)
}