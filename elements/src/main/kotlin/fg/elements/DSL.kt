package fg.elements

fun Element.header(init: Header.() -> Unit) = initAndAppendNode(Header(), init)
fun Element.h1(init: H1.() -> Unit) = initAndAppendNode(H1(), init)
fun Element.h2(init: H2.() -> Unit) = initAndAppendNode(H2(), init)
fun Element.p(init: P.() -> Unit) = initAndAppendNode(P(), init)
fun Element.div(init: Div.() -> Unit) = initAndAppendNode(Div(), init)
fun Element.pre(init: Pre.() -> Unit) = initAndAppendNode(Pre(), init)
fun Element.img(src: String, init: Img.() -> Unit) = initAndAppendNode(Img(src), init)

fun Element.div(className: String, init: Div.() -> Unit): Div {
    return initAndAppendNode(object : Div() {
        override val styleClassName = className.toClassSelector()

        override fun render() {
            super.render()
            addClass()
        }
    }, init)
}

private fun <T : Node> Node.initAndAppendNode(node: T, init: T.() -> Unit): T {
    node.init()
    appendChild(node)
    return node
}



