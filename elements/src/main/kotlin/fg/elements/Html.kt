package fg.elements

import fg.style.AnyRule
import fg.style.ClassRule
import fg.style.KeyframesRule
import fg.style.Rule
import fg.style.TypeRule
import org.w3c.dom.Element
import org.w3c.dom.css.CSSStyleSheet
import org.w3c.dom.events.Event
import kotlin.browser.document

val HTML = Html()

class Html internal constructor(val w3cElement: Element = document.documentElement!!) {

    private val stylesheet: CSSStyleSheet by lazy { document.styleSheets[0] as CSSStyleSheet }
    private val registeredClassStyles: MutableMap<String, Rule<*>> = hashMapOf()

    fun init(borderBox: Boolean = true,
             height100percent: Boolean = true) {

        if (borderBox) {
            addCSSRule(AnyRule() with {
                _boxSizing = "border-box"
            })
        }

        if (height100percent) {
            addCSSRule(TypeRule(TypeSelector("html")) with {
                _height = "100%"
            })
            addCSSRule(TypeRule(TypeSelector("body")) with {
                _height = "100%"
            })
        }

        BODY.init()

        //window.setTimeout({ BODY.callDidMountOnChildren() }, 10)
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

    fun registerCSSRule(rule: Rule<*>) {

        val existing = registeredClassStyles.put(rule.selector.toString(), rule)
        if (existing == null) {
            addCSSRule(rule)
        }
    }

    fun addCSSRule(rule: Rule<*>) {

        val ruleText = rule.cssText()
        console.log(ruleText)
        stylesheet.insertRule(ruleText, stylesheet.cssRules.length)
        if (rule !is KeyframesRule) {
            rule._childStyles.forEach { registerCSSRule(it) }
        }
    }

    companion object Html {


    }
}

fun org.w3c.dom.Document.onDOMContentLoaded(listener: (Event) -> Unit) {
    document.addEventListener("DOMContentLoaded", listener)
}

fun org.w3c.dom.Window.onLoad(listener: (Event) -> Unit) {
    window.addEventListener("load", listener)
}
