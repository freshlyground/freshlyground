package fg.style.colour

import fg.base.toHexString

class RgbColor(val r: Int, val g: Int, val b: Int, val a: Double? = null) : Colour {

    override fun toHtml(): String {
        return toHexString()
    }

    fun toHexString(): String {
        val rx = r.toHexString()
        val gx = g.toHexString()
        val bx = b.toHexString()
        return "#$rx$gx$bx"
    }

    fun toHsl(): Hsl {

        val max = Math.max(r, g, b)
        val min = Math.min(r, g, b)

        var h = (max + min) / 2
        var s = h
        var l = h

        if (max == min) {
            h = 0
            s = 0
        } else {
            val d = max - min

            s = if (l > 0.5)
                d / (2 - max - min)
            else
                d / (max + min)

            if (max == r) {
                h = (g - b) / d + if (g < b) 6 else 0
            } else if (max == g) {
                h = ((b - r) / d) + 2
            } else {
                h = ((r - g) / d) + 4
            }

            h /= 6
        }
        return Hsl(h, s, l, a)
    }

    override fun toString(): String {
        if (a != null) {
            return "rgba($r,$g,$b,$a)"
        } else {
            return "rgb($r,$g,$b)"
        }
    }

    fun withAlfa(alpha: Double): RgbColor {
        return RgbColor(r, g, b, alpha)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is RgbColor) return false

        if (r != other.r) return false
        if (g != other.g) return false
        if (b != other.b) return false
        if (a != other.a) return false

        return true
    }

    override fun hashCode(): Int {
        var result = r
        result = 31 * result + g
        result = 31 * result + b
        result = 31 * result + (a?.hashCode() ?: 0)
        return result
    }

    companion object Factory {

        val TRANSPARENT = RgbColor(0, 0, 0, 0.0)
        val WHITE = RgbColor(255, 255, 255)
        val BLACK = RgbColor(0, 0, 0)
        val RED = RgbColor(255, 0, 0)
        val GREEN = RgbColor(0, 255, 0)
        val BLUE = RgbColor(0, 0, 255)

        fun from(string: String): RgbColor {

            val stringWithoutHash = if (string.startsWith("#")) string.substring(1) else string
            if (stringWithoutHash.length == 6) {
                // ff00ee
                val rs = stringWithoutHash.substring(0, 2)
                val gs = stringWithoutHash.substring(2, 4)
                val bs = stringWithoutHash.substring(4, 6)
                val r = parseInt(rs, 16)
                val g = parseInt(gs, 16)
                val b = parseInt(bs, 16)
                return RgbColor(r, g, b)
            } else {
                // #f0e
                val rs = stringWithoutHash.substring(0, 1)
                val gs = stringWithoutHash.substring(1, 2)
                val bs = stringWithoutHash.substring(2, 3)
                val r = parseInt(rs, 16)
                val g = parseInt(gs, 16)
                val b = parseInt(bs, 16)
                return RgbColor(r, g, b)
            }
        }
    }
}