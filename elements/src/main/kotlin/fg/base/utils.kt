package fg.base

import kotlin.browser.window

private val HEX_CHARS = arrayOf('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f')

fun Int.toHexString(): String {
    val char2 = HEX_CHARS[this and 0x0f]
    val char1 = HEX_CHARS[this shr 4 and 0x0f]
    return "$char1$char2"
}

fun <A> debounce0(func: () -> dynamic, delay: Int): () -> Unit {

    var timeout = -1

    return {

        if (timeout == -1) {
            timeout = window.setTimeout({
                window.clearTimeout(timeout)
                timeout = -1
                func.invoke()
            }, delay)
        }
    }
}

fun <A> debounce1(func: (dynamic) -> dynamic, delay: Int): (A) -> Unit {

    var timeout = -1

    return {

        val arguments: dynamic = js("arguments")
        val argument1 = arguments[0]

        if (timeout == -1) {

            timeout = window.setTimeout({
                window.clearTimeout(timeout)
                timeout = -1
                func.invoke(argument1)
            }, delay)
        }
    }
}

fun <A> bounceUntil(func: (dynamic) -> dynamic, delay: Int): (A) -> Unit {

    var timeout = -1

    return {

        val arguments: dynamic = js("arguments")
        val argument1 = arguments[0]

        window.clearTimeout(timeout)

        timeout = window.setTimeout({
            window.clearTimeout(timeout)
            timeout = -1
            func.invoke(argument1)
        }, delay)
    }
}

fun Double.toCurrency(currency: String, side: Side = Side.LEFT, decimals: Int = 2): String {
    return when (side) {
        Side.LEFT -> "$currency ${this.toString().padEnd(decimals, '0')}"
        Side.RIGHT -> "${this.toString().padEnd(decimals, '0')} $currency"
    }
}

enum class Side {
    LEFT, RIGHT
}
