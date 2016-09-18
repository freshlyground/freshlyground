package fg.elements

import fg.style.ClassRule

interface StyledClass {

    val classSelector: ClassSelector

    val rule: ClassRule.() -> Unit
}
