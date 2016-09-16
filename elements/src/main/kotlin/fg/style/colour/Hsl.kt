package fg.style.colour

class Hsl(val h: Int, val s: Int, val l: Int, val a: Double? = null) : Colour {

    override fun toHtml(): String {
        if (a != null) {
            return "hsl($h, $s%, $l%, $a)"
        } else {
            return "hsl($h, $s%, $l%)"
        }
    }

    fun toRgb(): RgbColor {

        if (s == 0) {
            return RgbColor(1, 1, 1, a)
        }

        val q = if (l < 0.5)
            l * (1 + s)
        else
            l + s - l * s

        val p = (2 * l) - q

        return RgbColor(
                hueToRgb(p, q, h + 1 / 3),
                hueToRgb(p, q, h),
                hueToRgb(p, q, h - 1 / 3),
                a)

    }

    companion object Statics {

        val RED = Hsl(0, 100, 50)
        val GREEN = Hsl(120, 100, 50)
        val BLUE = Hsl(240, 100, 50)
    }
}