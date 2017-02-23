package fg.elements.todo

import fg.elements.ClassSelector
import fg.elements.H1
import fg.elements.HTML
import fg.elements.Header
import fg.elements.Section
import fg.elements.StyledClass
import fg.elements.Text
import fg.style.ClassRule

class TodoApp : Section() {

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

        addClass(classSelector)

        appendChild(header)
        appendChild(newTodo)
    }

    companion object TodoApp : StyledClass {

        override val classSelector = ClassSelector("todo-app")

        override val rule: ClassRule.() -> Unit = {
            _background = "#fff"
            _margin = "130px 0 40px 0"
            _position = "relative"
            _boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}

