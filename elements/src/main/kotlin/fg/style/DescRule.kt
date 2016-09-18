package fg.style

import fg.elements.DescendantSelector


class DescRule(selector: DescendantSelector) :
        CSSRule<DescendantSelector>(selector) {

    override fun cssText(): String {
        return cssText(selector)
    }
}
