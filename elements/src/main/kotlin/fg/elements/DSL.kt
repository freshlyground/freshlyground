package fg.elements

fun Element.div(init: Div.() -> Unit): Div {
    return initAndAppendNode(Div(), init)
}

fun Element.div(className: String, init: Div.() -> Unit): Div {
    return initAndAppendNode(object : Div() {
        override val styleClassName = className.toClassSelector()

        override fun render() {
            super.render()
            addClass()
        }
    }, init)
}

fun Element.img(src: String, init: Img.() -> Unit): Img {
    return initAndAppendNode(Img(src), init)
}

private fun <T : Node> Node.initAndAppendNode(node: T, init: T.() -> Unit): T {
    node.init()
    appendChild(node)
    return node
}



