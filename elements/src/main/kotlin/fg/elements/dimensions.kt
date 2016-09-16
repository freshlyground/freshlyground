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
}

fun Int.pct(): Percent = Percent(this.toDouble())
fun Double.pct(): Percent = Percent(this)

data class Pixels(override val value: Double) : Dimension {

    override val type = DimensionType.pixels

}

val Double.px: Pixels get() = Pixels(this)
val Int.px: Pixels get() = Pixels(this.toDouble())

data class Mm(override val value: Int) : Dimension {

    override val type = DimensionType.mm

}

fun Int.mm(): Mm = Mm(this)

data class Cm(override val value: Double) : Dimension {

    override val type = DimensionType.cm
}

fun Double.cm(): Cm = Cm(this)
fun Int.cm(): Cm = Cm(this.toDouble())

data class In(override val value: Double) : Dimension {

    override val type = DimensionType.inch
}

fun Double.inch(): In = In(this)
fun Int.inch(): In = In(this.toDouble())

data class Pt(override val value: Int) : Dimension {

    override val type = DimensionType.pt
}

fun Int.pt(): Pt = Pt(this)

data class Pc(override val value: Int) : Dimension {

    override val type = DimensionType.pc
}

fun Int.pc(): Pc = Pc(this)

data class Em(override val value: Double) : Dimension {

    override val type = DimensionType.em
}

val Int.percent: Percent get() = Percent(this.toDouble())
val Double.percent: Percent get() = Percent(this)

data class Rem(override val value: Double) : Dimension {

    override val type = DimensionType.rem
}

fun Int.rem(): Percent = Percent(this.toDouble())
fun Double.rem(): Percent = Percent(this)


data class Vh(override val value: Int) : Dimension {

    override val type = DimensionType.vh
}

fun Int.vh(): Vh = Vh(this)


data class Vw(override val value: Int) : Dimension {

    override val type = DimensionType.vw
}

fun Int.vw(): Vw = Vw(this)


data class VMin(override val value: Int) : Dimension {

    override val type = DimensionType.vmin
}

fun Int.vmin(): VMin = VMin(this)


data class VMax(override val value: Int) : Dimension {

    override val type = DimensionType.vmax
}

fun Int.vmax(): VMax = VMax(this)