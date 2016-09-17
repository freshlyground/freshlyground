package fg.elements

open class A() : Element("a") {

    var _href: String? by W3cDelegates.nullableAttribute("href")
    var _target: String? by W3cDelegates.nullableAttribute("target")
    var _download: Boolean? by W3cDelegates.nullableBooleanAttribute("dowload")
    var _rel: String? by W3cDelegates.nullableAttribute("rel")
    var _hreflang: String? by W3cDelegates.nullableAttribute("hreflang")
    var _type: String? by W3cDelegates.nullableAttribute("type")
}

open class Br() : Element("br")
open class Span() : Element("span")
open class I() : Element("i")