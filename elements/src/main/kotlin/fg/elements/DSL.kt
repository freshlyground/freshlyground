package fg.elements

fun Element.br(init: Br.() -> Unit) = initAndAppendNode(Br(), init)
fun Element.header(init: Header.() -> Unit) = initAndAppendNode(Header(), init)
fun Element.main(init: Main.() -> Unit) = initAndAppendNode(Main(), init)
fun Element.footer(init: Footer.() -> Unit) = initAndAppendNode(Footer(), init)
fun Element.h1(init: H1.() -> Unit) = initAndAppendNode(H1(), init)
fun Element.h2(init: H2.() -> Unit) = initAndAppendNode(H2(), init)
fun Element.h3(init: H3.() -> Unit) = initAndAppendNode(H3(), init)
fun Element.h4(init: H4.() -> Unit) = initAndAppendNode(H4(), init)
fun Element.h5(init: H5.() -> Unit) = initAndAppendNode(H5(), init)
fun Element.h6(init: H6.() -> Unit) = initAndAppendNode(H6(), init)
fun Element.p(init: P.() -> Unit) = initAndAppendNode(P(), init)
fun Element.span(init: Span.() -> Unit) = initAndAppendNode(Span(), init)
fun Element.hr(init: Hr.() -> Unit) = initAndAppendNode(Hr(), init)
fun Element.ul(init: Ul.() -> Unit) = initAndAppendNode(Ul(), init)
fun Element.ol(init: Ol.() -> Unit) = initAndAppendNode(Ol(), init)
fun Element.li(init: Li.() -> Unit) = initAndAppendNode(Li(), init)
fun Element.div(init: Div.() -> Unit) = initAndAppendNode(Div(), init)
fun Element.pre(init: Pre.() -> Unit) = initAndAppendNode(Pre(), init)
fun Element.a(href: String? = null, target: String? = null, init: A.() -> Unit) = initAndAppendNode(A() with { _href = href; _target = target }, init)
fun Element.i(init: I.() -> Unit) = initAndAppendNode(I(), init)
fun Element.inputText(init: InputText.() -> Unit) = initAndAppendNode(InputText(), init)
fun Element.inputNumber(init: InputNumber.() -> Unit) = initAndAppendNode(InputNumber(), init)
fun Element.img(src: String, init: Img.() -> Unit) = initAndAppendNode(Img(src), init)

fun Element.button(init: Button.() -> Unit) = initAndAppendNode(Button(), init)
fun Element.label(init: Label.() -> Unit) = initAndAppendNode(Label(), init)
fun Element.select(init: Select.() -> Unit) = initAndAppendNode(Select(), init)


fun Element.table(init: Table.() -> Unit) = initAndAppendNode(Table(), init)
fun Element.caption(init: Caption.() -> Unit) = initAndAppendNode(Caption(), init)
fun Element.colgroup(init: Colgroup.() -> Unit) = initAndAppendNode(Colgroup(), init)
fun Element.col(init: Col.() -> Unit) = initAndAppendNode(Col(), init)
fun Element.tbody(init: Tbody.() -> Unit) = initAndAppendNode(Tbody(), init)
fun Element.thead(init: Thead.() -> Unit) = initAndAppendNode(Thead(), init)
fun Element.tfoot(init: Tfoot.() -> Unit) = initAndAppendNode(Tfoot(), init)
fun Element.tr(init: Tr.() -> Unit) = initAndAppendNode(Tr(), init)
fun Element.td(init: Td.() -> Unit) = initAndAppendNode(Td(), init)
fun Element.th(init: Th.() -> Unit) = initAndAppendNode(Th(), init)

fun <T : Node> Node.initAndAppendNode(node: T, init: T.() -> Unit): T {
    node.init()
    appendChild(node)
    return node
}



