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


    private var _displayBeforeHiding: String = ""

    val hidden: Boolean
        get() = this.style.display == "none"

    protected val style: CSSStyleDeclaration
        get() = w3cElement.style

    var typeStyle: TypeStyle? = null

    open val styleClassPrefix: String? = null
    open val styleClassName: ClassSelector? = null
    open val styleClass: IClassStyle? = null

    /**
     * Called before didMount(). On parent elements before children.
     * Override when needed, but remember to call super.render().
     */
    open fun render() {

    }

    /**
     * Called after render(). On children before parent elements.
     * Override when needed, but remember to call super.didMount().
     */
    open fun didMount() {

    }

    /**
     * Called just before the element is removed from the dom.
     */
    open fun willUnMount() {

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
            HTML.registerStyle(typeStyle!!)
        }

        if (styleClass != null) {
            val nonNullClassStyle = styleClass!!
            HTML.registerStyle(nonNullClassStyle)
            addClass(nonNullClassStyle.className)
        }

        for (child in childElements) {
            child.renderStyle()
        }
    }

    fun addClass() {
        addClass(this.resolveClassStyleName())
    }

    fun addClass(selector: ClassSelector) {
        addClass(selector.value)
    }

    fun addClass(name: String) {
        w3cElement.classList.add(name)
    }

    fun removeClass(selector: ClassSelector) {
        removeClass(selector.value)
    }

    fun removeClass(name: String) {
        w3cElement.classList.remove(name)
    }

    fun removeClasses() {
        while (w3cElement.classList.length > 0) {
            w3cElement.classList.remove(w3cElement.classList[0]!!)
        }
    }

    fun toggleClass(name: String, force: Boolean = false) {
        w3cElement.classList.toggle(name, force)
    }

    operator fun String.unaryPlus() {
        appendChild(Text(this))
    }

    fun show() {
        if (hidden) {
            this.style.display = _displayBeforeHiding
        }
    }

    fun hide() {
        _displayBeforeHiding = this.style.display
        this.style.display = "none"
    }


}