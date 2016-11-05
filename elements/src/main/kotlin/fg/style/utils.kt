package fg.style

fun String.camelsToDashes(): String {

    var s = ""
    for (c in this) {
        if (c.toUpperCase() == c) {
            s += "-" + c.toLowerCase()
        } else {
            s += c
        }
    }
    return s
}