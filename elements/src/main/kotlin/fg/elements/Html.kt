package fg.elements

import org.w3c.dom.Element
import org.w3c.dom.css.CSSStyleSheet
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.browser.window

val HTML = Html()

class Html internal constructor(val w3cElement: Element = document.documentElement!!) {

    private val stylesheet: CSSStyleSheet by lazy { document.styleSheets[0] as CSSStyleSheet }
    private val registeredClassStyles: MutableMap<String, IClassStyle> = hashMapOf()


    fun init() {

        //val style = document.createElement("style").asDynamic()
        // WebKit hack :(
        //style.appendChild(document.createTextNode(""))
        //document.head!!.appendChild(style as org.w3c.dom.Node)

        BODY.init()
        BODY.renderStyle()
        window.setTimeout({ BODY.callDidMount() }, 10)
    }

    fun registerStyle(style: IStyle) {

        if (style.selector.toString() == ".fg-beans-menu-item") {
            console.log("fg-beans-menu-item")
        }

        when (style) {

            is IClassStyle -> {
                val previous = registeredClassStyles.put(style.className, style)
                if (previous == null) {

                    val rules = style.toCss()
                    for (rule in rules) {
                        console.log("Inserting stylesheet rule: \n" + rule)
                        stylesheet.insertRule(rule, stylesheet.cssRules.length)
                    }

                }
            }
            else -> {
                val rules = style.toCss()
                for (rule in rules) {
                    console.log("Inserting stylesheet rule: \n" + rule)
                    stylesheet.insertRule(rule, stylesheet.cssRules.length)
                }
            }
        }


    }
}

fun org.w3c.dom.Document.onDOMContentLoaded(listener: (Event) -> Unit) {
    document.addEventListener("DOMContentLoaded", listener)
}

fun org.w3c.dom.Window.onLoad(listener: (Event) -> Unit) {
    window.addEventListener("load", listener)
}
