package fg.style

import fg.elements.TypeSelector

class TypeRule(selector: TypeSelector) :
        Rule<TypeSelector>(selector) {

    override fun cssText(): String {
        return super.cssText(selector)
    }
}



