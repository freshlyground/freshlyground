package fg.base

private val HEX_CHARS = arrayOf('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f')

fun Int.toHexString(): String {
    val char2 = HEX_CHARS[this and 0x0f]
    val char1 = HEX_CHARS[this shr 4 and 0x0f]
    return "$char1$char2"
}



