package fg.elements.style.typed

enum class Position(val asString: String) {
    static("static"),
    relative("relative"),
    absolute("absolute"),
    fixed("fixed"),
    sticky("sticky"),
    inherit("inherit"),
    initial("initial"),
    unset("unset");

    override fun toString(): String {
        return asString
    }
}

fun String.toPosition(): Position {

    for (one in Position.values()) {
        if (one.asString == this) {
            return one
        }
    }
    throw IllegalArgumentException("Unknown position: " + this)
}

