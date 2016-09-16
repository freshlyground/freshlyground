package fg.elements.todo

import fg.elements.Text
import fg.elements.H12
import fg.elements.Header2
import fg.elements.Section2
import fg.style.ClassStyle
import fg.style.classStyle

class TodoApp : Section2() {

    override val styleClass: ClassStyle? = classStyle {
        background = "#fff"
        margin = "130px 0 40px 0"
        position = "relative"
        boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)"
    }

    private val header: Header2 by lazy {
        val header = Header2()
        header.appendChild(headerH1)
        header
    }

    private val headerH1: H12 by lazy {
        val h1 = H12()
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

