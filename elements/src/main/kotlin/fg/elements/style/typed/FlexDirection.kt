package fg.elements.style.typed

enum class FlexDirection(val asString: String) {

    row("row"),
    rowReverse("row-reverse"),
    column("column"),
    columnReverse("column-reverse");

    override fun toString(): String {
        return asString
    }
}

fun String.toFlexDirection(): FlexDirection {

    for (one in FlexDirection.values()) {
        if (one.asString == this) {
            return one
        }
    }
    throw IllegalArgumentException("Unknown flex-direction: " + this)
}