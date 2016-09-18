package fg.style

import fg.elements.DescendantSelector


class DescendantRule(selector: DescendantSelector) :
        Rule<DescendantSelector>(selector) {

    override fun cssText(): String {
        return cssText(selector)
    }
}
