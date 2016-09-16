package fg.elements.todo

import fg.elements.Text
import fg.elements.H1
import fg.elements.Header
import fg.elements.Section
import fg.style.ClassStyle
import fg.style.classStyle

class TodoApp : Section() {

    override val styleClass: ClassStyle? = classStyle {
        background = "#fff"
        margin = "130px 0 40px 0"
        position = "relative"
        boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)"
    }

    private val header: Header by lazy {
        val header = Header()
        header.appendChild(headerH1)
        header
    }

    private val headerH1: H1 by lazy {
        val h1 = H1()
        h1.appendChild(Text("todos"))
        h1
    }

    private val newTodo by lazy {
        val newTodo = NewTodo()
        newTodo
    }

    override fun render() {
        super.render()

        appendChild(header)
        appendChild(newTodo)
    }
}

