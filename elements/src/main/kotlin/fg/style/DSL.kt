package fg.style

import fg.elements.AndSelector
import fg.elements.ChildSelector
import fg.elements.DescendantSelector
import fg.elements.Element
import fg.elements.NotSelector
import fg.elements.PseudoClassSelector
import fg.elements.Selector
import fg.elements.StyledClass
import fg.elements.toSelector


fun Element.rule(styledClass: StyledClass, init: ClassRule.() -> Unit = styledClass.rule): ClassRule {
    val style = ClassRule(styledClass.classSelector)
    style.init()
    return style
}

fun CSSRule<*>.and(selector: String, init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, selector.toSelector()))
    style.init()
    this._childStyles.add(style)
    return style
}

fun CSSRule<*>.and(selector: Selector, init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, selector))
    style.init()
    this._childStyles.add(style)
    return style
}

fun CSSRule<*>.desc(selector: String, init: DescRule.() -> Unit): DescRule {
    val style = DescRule(DescendantSelector(this.selector, selector.toSelector()))
    style.init()
    this._childStyles.add(style)
    return style
}

fun CSSRule<*>.desc(selector: Selector, init: DescRule.() -> Unit): DescRule {
    val style = DescRule(DescendantSelector(this.selector, selector))
    style.init()
    this._childStyles.add(style)
    return style
}

fun CSSRule<*>.child(selector: String, init: ChildRule.() -> Unit): ChildRule {
    val style = ChildRule(ChildSelector(this.selector, selector.toSelector()))
    style.init()
    this._childStyles.add(style)
    return style
}

fun CSSRule<*>.child(selector: Selector, init: ChildRule.() -> Unit): ChildRule {
    val style = ChildRule(ChildSelector(this.selector, selector))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.active(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("active")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.checked(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("checked")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.empty(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("empty")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.enabled(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("enabled")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.first(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("first")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.firstChild(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("first-child")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.firstOfType(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("first-of-type")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.focus(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("focus")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.hover(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("hover")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.indeterminate(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("indeterminate")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.inRange(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("in-range")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.invalid(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("invalid")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.lang(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("lang")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.lastChild(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("last-child")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.lastOfType(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("last-of-type")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.left(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("left")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun CSSRule<*>.link(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("link")))
    style.init()
    this._childStyles.add(style)
    return style
}

fun CSSRule<*>.not(selector: Selector, init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, NotSelector(selector)))
    style.init()
    this._childStyles.add(style)
    return style
}