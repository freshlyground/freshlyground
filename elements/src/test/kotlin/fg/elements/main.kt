package fg.elements

import kotlin.browser.document


fun main(vararg args: String) {

    val page = document.location!!.href.substringAfter("page=")

    console.log(page)

    HTML.init()

    when (page) {
        "Keyboard" -> {
            mainKeyboard.start()
        }
        "Selector" -> {
            mainSelector.start()
        }
    }


}







