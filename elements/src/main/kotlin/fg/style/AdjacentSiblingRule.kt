package fg.style

import fg.elements.AdjacentSiblingSelector

class AdjacentSiblingRule(selector: AdjacentSiblingSelector) :
        Rule<AdjacentSiblingSelector>(selector) {

    override fun cssText(): String {
        return cssText(selector)
    }
}
