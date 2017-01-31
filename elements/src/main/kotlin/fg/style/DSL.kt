package fg.style

import fg.elements.AdjacentSiblingSelector
import fg.elements.AndSelector
import fg.elements.AnimationNameSelector
import fg.elements.ChildSelector
import fg.elements.ClassSelector
import fg.elements.DescendantSelector
import fg.elements.Element
import fg.elements.KeyframeSelector
import fg.elements.NotSelector
import fg.elements.PseudoClassSelector
import fg.elements.Selector
import fg.elements.StyledClass
import fg.elements.toSelector

fun Unit.keyframesRule(selector: AnimationNameSelector, init: KeyframesRule.() -> Unit): KeyframesRule {
    val style = KeyframesRule(selector)
    style.init()
    return style
}

fun Unit.classRule(selector: ClassSelector, init: Rule<*>.() -> Unit): ClassRule {
    val style = ClassRule(selector)
    style.init()
    return style
}


fun Element.rule(styledClass: StyledClass, init: ClassRule.() -> Unit = styledClass.rule): ClassRule {
    val style = ClassRule(styledClass.classSelector)
    style.init()
    return style
}

fun Rule<*>.and(selector: String, init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, selector.toSelector()))
    style.init()
    this._childStyles.add(style)
    return style
}

fun Rule<*>.and(selector: Selector, init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, selector))
    style.init()
    this._childStyles.add(style)
    return style
}

fun Rule<*>.adjacentSibling(selector: String, init: AdjacentSiblingRule.() -> Unit): AdjacentSiblingRule {
    val style = AdjacentSiblingRule(AdjacentSiblingSelector(this.selector, selector.toSelector()))
    style.init()
    this._childStyles.add(style)
    return style
}

fun Rule<*>.adjacentSibling(selector: Selector, init: AdjacentSiblingRule.() -> Unit): AdjacentSiblingRule {
    val style = AdjacentSiblingRule(AdjacentSiblingSelector(this.selector, selector))
    style.init()
    this._childStyles.add(style)
    return style
}

fun Rule<*>.desc(selector: String, init: DescendantRule.() -> Unit): DescendantRule {
    val style = DescendantRule(DescendantSelector(this.selector, selector.toSelector()))
    style.init()
    this._childStyles.add(style)
    return style
}

fun Rule<*>.desc(selector: Selector, init: DescendantRule.() -> Unit): DescendantRule {
    val style = DescendantRule(DescendantSelector(this.selector, selector))
    style.init()
    this._childStyles.add(style)
    return style
}

fun Rule<*>.child(selector: String, init: ChildRule.() -> Unit): ChildRule {
    val style = ChildRule(ChildSelector(this.selector, selector.toSelector()))
    style.init()
    this._childStyles.add(style)
    return style
}

fun Rule<*>.child(selector: Selector, init: ChildRule.() -> Unit): ChildRule {
    val style = ChildRule(ChildSelector(this.selector, selector))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.active(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("active")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.checked(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("checked")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.empty(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("empty")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.enabled(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("enabled")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.first(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("first")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.firstChild(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("first-child")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.firstOfType(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("first-of-type")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.focus(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("focus")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.hover(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("hover")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.indeterminate(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("indeterminate")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.inRange(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("in-range")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.invalid(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("invalid")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.lang(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("lang")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.lastChild(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("last-child")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.lastOfType(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("last-of-type")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.left(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("left")))
    style.init()
    this._childStyles.add(style)
    return style
}

infix fun Rule<*>.link(init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, PseudoClassSelector("link")))
    style.init()
    this._childStyles.add(style)
    return style
}

fun Rule<*>.not(selector: Selector, init: AndRule.() -> Unit): AndRule {
    val style = AndRule(AndSelector(this.selector, NotSelector(selector)))
    style.init()
    this._childStyles.add(style)
    return style
}

fun Unit.keyframesRule(selector: String, init: KeyframesRule.() -> Unit): KeyframesRule {
    return keyframesRule(AnimationNameSelector(selector), init)
}

fun KeyframesRule.keyframe(value: String, init: KeyFrameRule.() -> Unit): KeyFrameRule {
    val style = KeyFrameRule(KeyframeSelector(value))
    style.init()
    this._childStyles.add(style)
    return style
}

fun KeyframesRule.kfrom(init: KeyFrameRule.() -> Unit): KeyFrameRule {
    val style = KeyFrameRule(KeyframeSelector("from"))
    style.init()
    this._childStyles.add(style)
    return style
}

fun KeyframesRule.kto(init: KeyFrameRule.() -> Unit): KeyFrameRule {
    val style = KeyFrameRule(KeyframeSelector("to"))
    style.init()
    this._childStyles.add(style)
    return style
}