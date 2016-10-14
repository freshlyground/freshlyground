package fg.elements

fun String?.toDimension(): Dimension? {

    if (this == null) {
        return null
    }

    for (type in DimensionType.values()) {
        if (type.postfix == this) {
            return type.newFn.invoke(this)
        }
    }
    throw IllegalArgumentException("String cannot be converted to Dimension: " + this)
}

interface Dimension {

    val value: Any
    val type: DimensionType

    fun toHtml(): String {
        return "$value${type.postfix}"
    }
}

enum class DimensionType(val postfix: String, val newFn: (String) -> Dimension) {
    percent("%", { Percent(safeParseDouble(it)!!) }),
    pixels("px", { Pixels(safeParseDouble(it)!!) }),
    mm("mm", { Mm(parseInt(it)) }),
    cm("cm", { Cm(safeParseDouble(it)!!) }),
    inch("in", { In(safeParseDouble(it)!!) }),
    pt("pt", { Pt(parseInt(it)) }),
    pc("pc", { Pc(parseInt(it)) }),
    em("em", { Em(safeParseDouble(it)!!) }),
    rem("rem", { Rem(safeParseDouble(it)!!) }),
    vh("vh", { Vh(parseInt(it)) }),
    vw("vw", { Vw(parseInt(it)) }),
    vmin("vmin", { VMin(parseInt(it)) }),
    vmax("vmax", { VMax(parseInt(it)) })
}

data class Percent(override val value: Double) : Dimension {

    override val type = DimensionType.percent

    override fun toString(): String {
        return toHtml()
    }
}

val Int.pct: Percent get() = Percent(this.toDouble())
val Double.pct: Percent get() = Percent(this)

data class Pixels(override val value: Double) : Dimension {

    override val type = DimensionType.pixels

    override fun toString(): String {
        return toHtml()
    }
}

val Double.px: Pixels get() = Pixels(this)
val Int.px: Pixels get() = Pixels(this.toDouble())
val String.px: Pixels get() {
    return Pixels(safeParseDouble(this.substringBefore("px")) ?: throw IllegalArgumentException("'$this' is not parse-able as Pixels"))
}

data class Mm(override val value: Int) : Dimension {

    override val type = DimensionType.mm

    override fun toString(): String {
        return toHtml()
    }

}

val Int.mm: Mm get() = Mm(this)

data class Cm(override val value: Double) : Dimension {

    override val type = DimensionType.cm

    override fun toString(): String {
        return toHtml()
    }
}

val Double.cm: Cm get() = Cm(this)
val Int.cm: Cm get() = Cm(this.toDouble())

data class In(override val value: Double) : Dimension {

    override val type = DimensionType.inch

    override fun toString(): String {
        return toHtml()
    }
}

fun Double.inch(): In = In(this)
fun Int.inch(): In = In(this.toDouble())

data class Pt(override val value: Int) : Dimension {

    override val type = DimensionType.pt

    override fun toString(): String {
        return toHtml()
    }
}

val Int.pt: Pt get() = Pt(this)

data class Pc(override val value: Int) : Dimension {

    override val type = DimensionType.pc

    override fun toString(): String {
        return toHtml()
    }
}

val Int.pc: Pc get() = Pc(this)

data class Em(override val value: Double) : Dimension {

    override val type = DimensionType.em

    override fun toString(): String {
        return toHtml()
    }
}

val Int.percent: Percent get() = Percent(this.toDouble())
val Double.percent: Percent get() = Percent(this)

data class Rem(override val value: Double) : Dimension {

    override val type = DimensionType.rem

    override fun toString(): String {
        return toHtml()
    }
}

val Int.rem: Percent get() = Percent(this.toDouble())
val Double.rem: Percent get() = Percent(this)


data class Vh(override val value: Int) : Dimension {

    override val type = DimensionType.vh

    override fun toString(): String {
        return toHtml()
    }
}

val Int.vh: Vh get() = Vh(this)


data class Vw(override val value: Int) : Dimension {

    override val type = DimensionType.vw

    override fun toString(): String {
        return toHtml()
    }
}

val Int.vw: Vw get() = Vw(this)


data class VMin(override val value: Int) : Dimension {

    override val type = DimensionType.vmin

    override fun toString(): String {
        return toHtml()
    }
}

val Int.vmin: VMin get() = VMin(this)


data class VMax(override val value: Int) : Dimension {

    override val type = DimensionType.vmax

    override fun toString(): String {
        return toHtml()
    }
}

val Int.vmax: VMax get() = VMax(this)