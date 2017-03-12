package fg.md.support

import fg.base.bounceUntil
import fg.base.debounce1
import fg.elements.ClassSelector
import fg.elements.Element
import fg.elements.HTML
import fg.elements.onMouseDown
import fg.elements.onMouseUp
import fg.elements.px
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.classRule
import fg.style.colour.RgbColor
import org.w3c.dom.events.Event
import org.w3c.dom.events.MouseEvent
import kotlin.browser.window

/**
 * https://medium.com/@_jh3y/how-to-create-the-ripple-effect-from-google-material-design-c6f993e1d39#.l08nnzgfo
 */
class Ripple(val element: Element,
             val inkColor: RgbColor = RgbColor.RED,
             val startedCallback: (() -> Unit)? = null,
             val doneCallback: (() -> Unit)? = null) {

    private var started = false

    private val rippleContainer: RippleContainer by lazy {
        RippleContainer()
    }

    private val handleMouseDown: (MouseEvent) -> Unit = { e ->

        start(e.pageX, e.pageY)
        if (!started) {
            startedCallback?.invoke()
            started = true
        }
    }

    private val handleMouseDown_rippleDone: (MouseEvent) -> Unit = { e ->
        console.log("Ripple done, invoking doneCallback")
        doneCallback?.invoke()
    }

    private val cleanUp: (Event) -> Unit = {

        this.rippleContainer.removeChildren()
        started = false
    }

    fun init() {
        element.appendChild(rippleContainer)
        element.onMouseDown(handleMouseDown)
        element.onMouseDown(bounceUntil(handleMouseDown_rippleDone, 1000))
        element.onMouseUp(debounce1(cleanUp, 2000))
        element.addClass(rippleTargetClass)
    }

    private fun start(pageX: Double, pageY: Double) {

        val size = element.offsetWidth
        val pos = element.boundingClientRect
        // get click coordinates
        // logic = click coordinates relative to page
        // - parent's position relative to page -
        // half of self height/width to make it controllable from the center;
        val halfSize = size / 2
        val x = pageX - pos.left - halfSize - window.scrollX
        val y = pageY - pos.top - halfSize - window.scrollY

        val rippleInk = RippleInk(inkColor)
        rippleInk.setPosition(x to y)
        rippleInk.setSize(size.px)

        this.rippleContainer.appendChild(rippleInk)

        this.rippleContainer._enforceStyleRecalculation()
    }


    companion object Factory {

        val rippleTargetClass: ClassSelector = "md-ripple-target".toClassSelector()

        val rippleTarget: ClassRule = Unit.classRule(rippleTargetClass) {
            _position = "relative"
            _overflowX = "hidden"
            _overflowY = "hidden"
        }

        init {

            HTML.registerCSSRule(rippleTarget)
        }
    }
}