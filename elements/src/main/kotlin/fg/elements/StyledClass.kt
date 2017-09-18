package fg.elements

import fg.style.ClassRule

typealias ClassRuleBuilder = ClassRule.() -> Unit

interface StyledClass {

    val classSelector: ClassSelector

    val rule: ClassRuleBuilder
}
