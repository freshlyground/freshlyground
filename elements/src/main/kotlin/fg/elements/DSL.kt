package fg.elements

fun Element.header(init: Header.() -> Unit) = initAndAppendNode(Header(), init)
fun Element.h1(init: H1.() -> Unit) = initAndAppendNode(H1(), init)
fun Element.h2(init: H2.() -> Unit) = initAndAppendNode(H2(), init)
fun Element.h3(init: H3.() -> Unit) = initAndAppendNode(H3(), init)
fun Element.h4(init: H4.() -> Unit) = initAndAppendNode(H4(), init)
fun Element.h5(init: H5.() -> Unit) = initAndAppendNode(H5(), init)
fun Element.h6(init: H6.() -> Unit) = initAndAppendNode(H6(), init)
fun Element.p(init: P.() -> Unit) = initAndAppendNode(P(), init)
fun Element.hr(init: Hr.() -> Unit) = initAndAppendNode(Hr(), init)
fun Element.ul(init: Ul.() -> Unit) = initAndAppendNode(Ul(), init)
fun Element.ol(init: Ol.() -> Unit) = initAndAppendNode(Ol(), init)
fun Element.li(init: Li.() -> Unit) = initAndAppendNode(Li(), init)
fun Element.div(init: Div.() -> Unit) = initAndAppendNode(Div(), init)
fun Element.pre(init: Pre.() -> Unit) = initAndAppendNode(Pre(), init)
fun Element.a(href: String? = null, target: String? = null, init: A.() -> Unit) = initAndAppendNode(A() with { _href = href; _target = target }, init)
fun Element.i(init: I.() -> Unit) = initAndAppendNode(I(), init)
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

fun <T : Node> Node.initAndAppendNode(node: T, init: T.() -> Unit): T {
    node.init()
    appendChild(node)
    return node
}



