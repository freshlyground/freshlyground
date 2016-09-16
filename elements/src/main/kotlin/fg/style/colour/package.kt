package fg.style.colour

fun hueToRgb(pIn: Int, qIn: Int, tIn: Int): Int {

    var t = tIn

    if (t < 0) {
        t++
    }
    if (t > 1) {
        t--
    }
    if (t < 1 / 6) {
        return pIn + (qIn - pIn) * 6 * t
    }
    if (t < 1 / 2) {
        return qIn
    }
    if (t < 2 / 3) {
        return pIn + (qIn - pIn) * (2 / 3 - t) * 6
    }
    return pIn
}

