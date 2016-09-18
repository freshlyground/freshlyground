package fg.elements

import fg.style.ClassRule

class World : Span() {

    override fun render() {

        addClass(classSelector)

        appendChild(Text("World"))
    }

    companion object Statics : StyledClass {

        override val classSelector = "hello".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            border = "1px solid lightblue"
            backgroundColor = "red"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}