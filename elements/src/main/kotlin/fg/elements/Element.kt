package fg.elements

import org.w3c.dom.DOMRect
import org.w3c.dom.HTMLElement
import org.w3c.dom.css.CSSStyleDeclaration
import kotlin.browser.document

open class Element(name: String? = null,
                   existingElement: HTMLElement? = null,
                   internal val w3cElement: HTMLElement = existingElement ?: document.createElement(name!!) as HTMLElement) :
        Node(w3cElement) {

    val childElements: List<Element>
        get() {
            return childNodes.filter({ it is Element }) as List<Element>
        }

    val _parentElement: Element
        get() = _parentNode!! as Element

    var _id: String? by W3cDelegates.nullableAttribute("id")
    var _tabindex: String? by W3cDelegates.nullableAttribute("tabindex")

    private var _displayBeforeHiding: String = ""

    val hidden: Boolean
        get() = this.style.display == "none"

    val style: CSSStyleDeclaration
        get() = w3cElement.style

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
     */

    /**
     * Without borders.
     */
    val clientWidth: Double
        get() = w3cElement.clientWidth
    val clientHeight: Double
        get() = w3cElement.clientHeight


    /**
     * Including borders, but not margins.
     */
    val offsetWidth: Double
        get() = w3cElement.offsetWidth
    val offsetHeight: Double
        get() = w3cElement.offsetHeight


    val scrollWidth: Double
        get() = w3cElement.scrollWidth
    val scrollHeight: Double
        get() = w3cElement.scrollHeight

    val offsetTop: Double
        get() = w3cElement.offsetTop
    val offsetLeft: Double
        get() = w3cElement.offsetLeft

    val boundingClientRect: DOMRect
        get() = w3cElement.getBoundingClientRect()


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

    fun removeClasses(predicate: (String) -> Boolean) {

        if (w3cElement.classList.length == 0) {
            return
        }

        for (i in Math.max(0, w3cElement.classList.length - 1) downTo 0) {
            val currClass = w3cElement.classList[i]!!
            if (predicate(currClass)) {
                w3cElement.classList.remove(currClass)
            }
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
        if (!hidden) {
            _displayBeforeHiding = this.style.display
            this.style.display = "none"
        }
    }

    fun traverseElements(each: (Element) -> Boolean) {
        for (child in childElements) {
            val continueTraversing = each(child)
            if (!continueTraversing) {
                break
            }
            child.traverseElements(each)
        }
    }
}