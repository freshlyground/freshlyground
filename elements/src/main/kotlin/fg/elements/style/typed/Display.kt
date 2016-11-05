package fg.elements.style.typed

enum class Display(val asString: String) {
    none("none"),
    iinline("inline"),
    block("block"),
    flex("flex"),
    inlineBlock("inline-block"),
    contents("contents"),
    listItem("list-item");

    override fun toString(): String {
        return asString
    }
}

fun String.toDisplay(): Display {

    for (one in Display.values()) {
        if (one.asString == this) {
            return one
        }
    }
    throw IllegalArgumentException("Unknown display: " + this)
}

