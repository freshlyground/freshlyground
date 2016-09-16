package fg.elements

interface IClassStyle : IStyle {

    override val selector: ClassSelector

    val className: String
}