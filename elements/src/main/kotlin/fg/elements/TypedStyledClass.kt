package fg.elements

import fg.style.TypedClassRule

interface TypedStyledClass {

    val classSelector: ClassSelector

    val rule: TypedClassRule.() -> Unit
}
