package fg.style

import fg.elements.AndSelector

class AndRule(selector: AndSelector) :
        CSSRule<AndSelector>(selector) {

    override fun cssText(): String {
        return cssText(selector)
    }
}
