package fg.elements

import fg.style.CSSRule
import fg.style.ClassRule
import org.w3c.dom.Element
import org.w3c.dom.css.CSSStyleSheet
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.browser.window

val HTML = Html()

class Html internal constructor(val w3cElement: Element = document.documentElement!!) {

    private val stylesheet: CSSStyleSheet by lazy { document.styleSheets[0] as CSSStyleSheet }
    private val registeredClassStyles: MutableMap<String, CSSRule<*>> = hashMapOf()


    fun init() {

        //val style = document.createElement("style").asDynamic()
        // WebKit hack :(
        //style.appendChild(document.createTextNode(""))
        //document.head!!.appendChild(style as org.w3c.dom.Node)

        BODY.init()
        window.setTimeout({ BODY.callDidMount() }, 10)
    }

    fun registerStyle(styledClass: StyledClass) {

        fun rule(styledClass: StyledClass, init: ClassRule.() -> Unit = styledClass.rule): ClassRule {
            val style = ClassRule(styledClass.classSelector)
            style.init()
            return style
        }

        val rule = rule(styledClass, styledClass.rule)
        registerCSSRule(rule)
    }

    fun registerCSSRule(rule: CSSRule<*>) {

        val existing = registeredClassStyles.put(rule.selector.toString(), rule)
        if (existing == null) {
            addCSSRule(rule)
        }
    }

    fun addCSSRule(rule: CSSRule<*>) {

        val ruleText = rule.cssText()
        console.log(ruleText)
        stylesheet.insertRule(ruleText, stylesheet.cssRules.length)
        rule._childStyles.forEach { registerCSSRule(it) }
    }
}

fun org.w3c.dom.Document.onDOMContentLoaded(listener: (Event) -> Unit) {
    document.addEventListener("DOMContentLoaded", listener)
}

fun org.w3c.dom.Window.onLoad(listener: (Event) -> Unit) {
    window.addEventListener("load", listener)
}
