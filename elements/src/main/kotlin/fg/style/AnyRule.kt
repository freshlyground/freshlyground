package fg.style

import fg.elements.AnySelector

class AnyRule() :
        Rule<AnySelector>(AnySelector.GET) {

    override fun cssText(): String {
        return super.cssText(selector)
    }
}



