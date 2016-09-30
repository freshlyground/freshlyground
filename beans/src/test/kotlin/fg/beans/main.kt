package fg.beans

import fg.base.debounce1
import fg.elements.BODY
import fg.elements.HTML
import fg.elements.div
import fg.elements.onMouseMove
import fg.elements.with

fun main(vararg args: String) {


    BODY with {
        val myDiv = div {
            addClass("my-div")
            +"Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello"
        }
        myDiv.onMouseMove(debounce1({ event ->
            console.log("through", event)
        }, 1000))
    }

    HTML.init()
}

