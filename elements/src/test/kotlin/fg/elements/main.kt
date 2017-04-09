package fg.elements

import fg.base.URL
import kotlin.browser.document
import kotlin.browser.window


fun main(vararg args: String) {

    val page = document.location!!.href.substringAfter("page=")

    console.log(page)

    when (page) {
        "Keyboard" -> {
            mainKeyboard.start()
        }
        "Selector" -> {
            mainSelector.start()
        }
        "FlexLayout" -> {
            mainFlexLayout.start()
        }
        "Element_performance" -> {
            mainElement_performance.start()
        }
    }

    val currUrl = URL.from(window.location.href)

    BODY with {

        ul {
            li {
                a("#") {
                    +"Keyboard"
                    onClick {
                        window.location.href = currUrl.replaceParam("page", "Keyboard").toString()
                    }

                }
            }
            li {
                a("#") {
                    +"Selector"
                    onClick {
                        window.location.href = currUrl.replaceParam("page", "Selector").toString()
                    }

                }
            }
            li {
                a("#") {
                    +"FlexLayout"
                    onClick {
                        window.location.href = currUrl.replaceParam("page", "FlexLayout").toString()
                    }

                }
            }
            li {
                a("#") {
                    +"Element_performance"
                    onClick {
                        window.location.href = currUrl.replaceParam("page", "Element_performance").toString()
                    }

                }
            }
        }

    }

    HTML.init()

}







