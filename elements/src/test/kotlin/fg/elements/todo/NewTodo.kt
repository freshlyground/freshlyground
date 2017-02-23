package fg.elements.todo

import fg.elements.ClassSelector
import fg.elements.HTML
import fg.elements.InputText
import fg.elements.StyledClass
import fg.elements.onKeyDown
import fg.style.ClassRule
import org.w3c.dom.events.Event

class NewTodo : InputText() {

    private val keyDownHandler: (Event) -> Unit = {
        console.log("keyDownHandler")
    }

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    override fun didMount() {
        super.didMount()

        onKeyDown(keyDownHandler)
    }

    companion object NewTodo : StyledClass {

        override val classSelector = ClassSelector("new-todo")

        override val rule: ClassRule.() -> Unit = {
            _padding = "16px 16px 16px 60px"
            _border = "none"
            _background = "rgba(0, 0, 0, 0.003)"
            _boxShadow = "inset 0 -2px 1px rgba(0,0,0,0.03)"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}