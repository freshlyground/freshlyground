package fg.style

import fg.elements.AndSelector
import fg.elements.ChildSelector
import fg.elements.ClassSelector
import fg.elements.DescendantSelector
import fg.elements.Element
import fg.elements.NotSelector
import fg.elements.PseudoClassSelector
import fg.elements.Selector
import fg.elements.TypeSelector
import fg.elements.toClassSelector
import fg.elements.toSelector

fun Element.typeStyle(init: TypeStyle.() -> Unit): TypeStyle {
    val style = TypeStyle(TypeSelector(this._nodeName))
    style.init()
    this.typeStyle = style
    return style
}

fun Element.classStyle(init: ClassStyle.() -> Unit): ClassStyle {
    val style = ClassStyle(resolveClassStyleName())
    style.init()
    return style
}

fun Style.and(selector: String, init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, selector.toSelector()))
    style.init()
    this.childStyles.add(style)
    return style
}

fun Style.and(selector: Selector, init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, selector))
    style.init()
    this.childStyles.add(style)
    return style
}

fun Style.desc(selector: String, init: Style.() -> Unit): Style {
    val style = Style(DescendantSelector(this.selector, selector.toSelector()))
    style.init()
    this.childStyles.add(style)
    return style
}

fun Style.desc(selector: Selector, init: Style.() -> Unit): Style {
    val style = Style(DescendantSelector(this.selector, selector))
    style.init()
    this.childStyles.add(style)
    return style
}

fun Style.child(selector: String, init: Style.() -> Unit): Style {
    val style = Style(ChildSelector(this.selector, selector.toSelector()))
    style.init()
    this.childStyles.add(style)
    return style
}

fun Style.child(selector: Selector, init: Style.() -> Unit): Style {
    val style = Style(ChildSelector(this.selector, selector))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.active(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("active")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.checked(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("checked")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.empty(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("empty")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.enabled(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("enabled")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.first(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("first")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.firstChild(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("first-child")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.firstOfType(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("first-of-type")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.focus(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("focus")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.hover(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("hover")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.indeterminate(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("indeterminate")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.inRange(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("in-range")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.invalid(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("invalid")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.lang(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("lang")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.lastChild(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("last-child")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.lastOfType(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("last-of-type")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.left(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("left")))
    style.init()
    this.childStyles.add(style)
    return style
}

infix fun ClassStyle.link(init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, PseudoClassSelector("link")))
    style.init()
    this.childStyles.add(style)
    return style
}

fun Style.not(selector: Selector, init: Style.() -> Unit): Style {
    val style = Style(AndSelector(this.selector, NotSelector(selector)))
    style.init()
    this.childStyles.add(style)
    return style
}

fun Element.resolveClassStyleName(): ClassSelector {

    val classSelector: ClassSelector = if (this.styleClassName != null) {
        this.styleClassName!!
    } else {
        jsClass.name.toLowerCase().toClassSelector()
    }

    if (styleClassPrefix != null)
        return ClassSelector("$styleClassPrefix-$classSelector")
    else
        return classSelector
}