package fg.elements

import fg.style.TypeStyle
import fg.style.resolveClassStyleName
import org.w3c.dom.HTMLElement
import org.w3c.dom.css.CSSStyleDeclaration
import kotlin.browser.document

open class Element(name: String? = null,
                   existingElement: HTMLElement? = null,
                   internal val w3cElement: HTMLElement = existingElement ?: document.createElement(name!!) as HTMLElement) :
        Node(w3cElement) {

    private val childElements: List<Element>
        get() {
            return childNodes.filter({ it is Element }) as List<Element>
        }

    protected val style: CSSStyleDeclaration
        get() = w3cElement.style

    var typeStyle: TypeStyle? = null

    open val styleClassPrefix: String? = null
    open val styleClassName: ClassSelector? = null
    open val styleClass: IClassStyle? = null

    /**
     * Invoked before didMount(). On parent elements before children.
     * Override when needed, but remember to call super.render().
     */
    open fun render() {

    }

    /**
     * Invoked after render(). On children before parent elements.
     * Override when needed, but remember to call super.didMount().
     */
    open fun didMount() {

    }

    internal fun callDidMount() {

        for (child in childNodes) {
            if (child is Element) {
                child.callDidMount()
                child.didMount()
            }
        }
    }

    internal fun renderStyle() {

        if (typeStyle != null) {
            html.registerStyle(typeStyle!!)
        }

        if (styleClass != null) {
            val nonNullClassStyle = styleClass!!
            html.registerStyle(nonNullClassStyle)
            addClass(nonNullClassStyle.className)
        }

        for (child in childElements) {
            child.renderStyle()
        }
    }

    fun addClass() {
        w3cElement.classList.add(this.resolveClassStyleName().value)
    }

    fun addClass(name: String) {
        w3cElement.classList.add(name)
    }

    fun removeClass(name: String) {
        w3cElement.classList.remove(name)
    }

    operator fun String.unaryPlus() {
        appendChild(Text(this))
    }


}