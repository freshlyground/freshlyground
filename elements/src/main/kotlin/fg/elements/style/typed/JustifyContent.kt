package fg.elements.style.typed

enum class JustifyContent(val asString: String) {

    flexStart("flex-start"),
    flexEnd("flex-end"),
    center("center"),
    spaceBetween("space-between"),
    spaceEvenly("space-evenly"),
    spaceAround("space-around"),

    inherit("inherit"),
    initial("initial"),
    unset("unset")
    ;

    override fun toString(): String {
        return asString
    }
}

fun String.toJustifyContent(): JustifyContent {

    for (one in JustifyContent.values()) {
        if (one.asString == this) {
            return one
        }
    }
    throw IllegalArgumentException("Unknown justify-content: " + this)
}