package fg.elements

import fg.style.ClassRule
import fg.style.active
import fg.style.and
import fg.style.hover

class Hello : Span() {

    override fun render() {

        addClass(classSelector)
        appendChild(Text("Hello"))

    }

    companion object Statics : StyledClass {

        override val classSelector = "hello".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            border = "1px solid green"
            backgroundColor = "#ccc"

            and(":hover") {
                backgroundColor = "lightblue"
            }


            hover {
                backgroundColor = "lightblue"
            }

            active {
                border = "1px solid red"
            }
        }

        init {
            HTML.registerStyle(this)
        }

    }
}