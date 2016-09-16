package fg.elements.todo

import fg.elements.InputText
import fg.elements.onKeyDown
import fg.style.ClassStyle
import fg.style.classStyle
import org.w3c.dom.events.Event

class NewTodo : InputText() {

    override val styleClass: ClassStyle? = classStyle {

        padding = "16px 16px 16px 60px"
        border = "none"
        background = "rgba(0, 0, 0, 0.003)"
        boxShadow = "inset 0 -2px 1px rgba(0,0,0,0.03)"

    }

    private val keyDownHandler: (Event) -> Unit = {
        console.log("keyDownHandler")
    }

    override fun didMount() {
        super.didMount()

        onKeyDown(keyDownHandler)
    }
}