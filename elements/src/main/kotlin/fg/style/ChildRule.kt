package fg.style

import fg.elements.ChildSelector


class ChildRule(selector: ChildSelector) :
        Rule<ChildSelector>(selector) {

    override fun cssText(): String {
        return cssText(selector)
    }
}
