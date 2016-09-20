package fg.elements

import fg.elements.todo.TodoApp


fun main(vararg args: String) {


    console.log(DescendantSelector("div".toSelector(), ".descendant".toSelector()).toString())
    console.log(ChildSelector("div".toSelector(), ".child".toSelector()).toString())
    console.log(AdjacentSiblingSelector("div".toSelector(), ".adjacent-sibling".toSelector()).toString())
    console.log(GeneralSiblingSelector("div".toSelector(), ".general-sibling".toSelector()).toString())
    console.log(AndSelector("div".toSelector(), ".special".toSelector()).toString())


    /*val button = Button()
    button.textContent = "A Button"
    body.appendChild(button)

    val p = P()
    p.appendChild(Text("Foo"))
    p.appendChild(Text(" "))
    p.appendChild(Text("Bar"))
    p.prependChild(Br())
    p.prependChild(Text("Prepended last"))

    body.appendChild(p)
    body.appendChild(HelloWorldDiv())*/
    //BODY.appendChild(Hello())
    //body.appendChild(InputText())
    //body.appendChild(InputNumber())

    //BODY.appendChild(Hr())
    //BODY.appendChild(TodoApp())
    val span = Span()
    span.textContent = "Test 1"
    span.textContent = "Test 2"
    BODY.appendChild(span)

    HTML.init()
}







