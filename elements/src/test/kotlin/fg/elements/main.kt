package fg.elements

import fg.elements.todo.TodoApp
import kotlin.browser.document


fun main(vararg args: String) {


    console.log(DescendantSelector("div".toSelector(), ".descendant".toSelector()).toString())
    console.log(ChildSelector("div".toSelector(), ".child".toSelector()).toString())
    console.log(AdjacentSiblingSelector("div".toSelector(), ".adjacent-sibling".toSelector()).toString())
    console.log(GeneralSiblingSelector("div".toSelector(), ".general-sibling".toSelector()).toString())
    console.log(AndSelector("div".toSelector(), ".special".toSelector()).toString())

    val html = html
    val body = body

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
    body.appendChild(Hello())
    //body.appendChild(InputText())
    //body.appendChild(InputNumber())

    body.appendChild(Hr())
    body.appendChild(TodoApp())

    html.init()
    document.onload
}







