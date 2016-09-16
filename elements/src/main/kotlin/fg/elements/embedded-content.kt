package fg.elements

open class Img(src: String) : Element(name = "img") {

    var _alt: String? by W3cDelegates.nullableAttribute("alt")
    var _width: Dimension? by W3cDelegates.nullableDimensionAttribute("width")
    var _height: Dimension? by W3cDelegates.nullableDimensionAttribute("height")
    var _src: String by W3cDelegates.attribute(this, src, "src")
}

