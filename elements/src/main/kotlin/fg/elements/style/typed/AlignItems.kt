package fg.elements.style.typed

enum class AlignItems(val asString: String) {

    flexStart("flex-start"),
    flexEnd("flex-end"),
    center("center"),
    baseline("baseline"),
    stretch("stretch"),

    inherit("inherit"),
    initial("initial"),
    unset("unset")
    ;


    override fun toString(): String {
        return asString
    }
}

fun String.toAlignItems(): AlignItems {

    for (one in AlignItems.values()) {
        if (one.asString == this) {
            return one
        }
    }
    throw IllegalArgumentException("Unknown align-items: " + this)
}