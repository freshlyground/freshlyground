package fg.elements

class HelloWorldDiv : Div() {

    private val hello by lazy {
        Hello()
    }

    private val world by lazy {
        World()
    }

    override fun render() {
        appendChild(hello)
        appendChild(Text(" "))
        appendChild(world)
    }
}