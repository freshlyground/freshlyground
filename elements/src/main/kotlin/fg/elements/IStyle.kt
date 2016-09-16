package fg.elements

interface IStyle {

    val selector: Selector

    fun toCss(): List<String>
}