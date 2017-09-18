package fg.style

import fg.elements.ClassSelector

class ClassRule(selector: ClassSelector) :
        Rule<ClassSelector>(selector) {

    val className: String
        get() = selector.value

    override fun cssText(): String {
        return super.cssText(selector)
    }
}
