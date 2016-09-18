package fg.elements

abstract class Selector() {

    abstract override fun toString(): String

    companion object Statics {
        val ANY: AnySelector = AnySelector()
    }
}

class AnySelector() : Selector() {

    override fun toString(): String {
        return "*"
    }

    companion object Statics {
        val GET = AnySelector()
    }
}

class TypeSelector(val value: String) : Selector() {

    override fun toString(): String {
        return value
    }
}

class ClassSelector(val value: String) : Selector() {

    override fun toString(): String {
        return "." + value
    }
}

class IdSelector(val value: String) : Selector() {

    override fun toString(): String {
        return "#" + value
    }
}

class AttrSelector(val value: String) : Selector() {

    override fun toString(): String {
        return "[$value]"
    }
}

class PseudoClassSelector(val value: String) : Selector() {

    override fun toString(): String {
        return ":" + value
    }
}

abstract class CompositeSelector(val a: Selector, val combinator: String, val b: Selector) : Selector() {

    override fun toString(): String {
        return a.toString() + " " + combinator + " " + b.toString()
    }
}

class ChildSelector(a: Selector, b: Selector) : CompositeSelector(a, ">", b)
class AdjacentSiblingSelector(a: Selector, b: Selector) : CompositeSelector(a, "+", b)
class GeneralSiblingSelector(a: Selector, b: Selector) : CompositeSelector(a, "~", b)
class DescendantSelector(a: Selector, b: Selector) : CompositeSelector(a, "", b) {
    override fun toString(): String {
        return a.toString() + " " + b.toString()
    }
}

class AndSelector(a: Selector, b: Selector) : CompositeSelector(a, "", b){
    override fun toString(): String {
        return a.toString() + b.toString()
    }
}
class NotSelector(val selector: Selector) : Selector() {

    override fun toString(): String {
        return ":not($selector)"
    }
}

fun String.toSelector(): Selector {

    if (this.startsWith(":")) {
        return PseudoClassSelector(this.substringAfter(":"))
    } else if (this.startsWith(".")) {
        return ClassSelector(this.substringAfter("."))
    } else if (this.startsWith("#")) {
        return IdSelector(this.substringAfter("#"))
    } else if (this == "*") {
        return AnySelector()
    } else {
        return TypeSelector(this)
    }
}

fun String.toClassSelector(): ClassSelector {

    if (this.startsWith(".")) {
        return ClassSelector(this.substringAfter("."))
    } else {
        return ClassSelector(this)
    }
}