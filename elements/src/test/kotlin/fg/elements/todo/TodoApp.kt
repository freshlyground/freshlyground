package fg.elements.todo

import fg.elements.Text
import fg.elements.h1
import fg.elements.header
import fg.elements.section
import fg.style.ClassStyle
import fg.style.classStyle

class TodoApp : section() {

    override val styleClass: ClassStyle? = classStyle {
        background = "#fff"
        margin = "130px 0 40px 0"
        position = "relative"
        boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)"
    }

    private val header: header by lazy {
        val header = header()
        header.appendChild(headerH1)
        header
    }

    private val headerH1: h1 by lazy {
        val h1 = h1()
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

