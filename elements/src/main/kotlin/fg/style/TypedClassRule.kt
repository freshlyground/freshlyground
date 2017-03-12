package fg.style

import fg.elements.ClassSelector

class TypedClassRule(selector: ClassSelector) :
        TypedRule<ClassSelector>(selector) {

    val className: String
        get() = selector.value

    override fun cssText(): String {
        return super.cssText(selector)
    }
}



