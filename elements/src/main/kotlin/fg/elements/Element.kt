package fg.elements

import fg.elements.layout.Breakpoint
import fg.elements.layout.Layout
import fg.elements.layout.LayoutDelegate
import fg.elements.style.typed.Position
import fg.elements.style.typed.TypedStyle
import org.w3c.dom.DOMRect
import org.w3c.dom.HTMLElement
import org.w3c.dom.css.CSSStyleDeclaration
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.browser.window

open class Element(name: String? = null,
                   existingElement: HTMLElement? = null,
                   internal val w3cElement: HTMLElement = existingElement ?: document.createElement(name!!) as HTMLElement) :
        Node(w3cElement) {

    var renderCalled = false
        private set

    var didMountCalled = false
        private set

    private val resizedListeners: MutableList<(ResizedEvent) -> Unit> by lazy {
        arrayListOf<(ResizedEvent) -> Unit>()
    }
    private var resizeSensor: ResizeSensor? = null

    private val hideOnBreakpoints: MutableList<Breakpoint> by lazy { arrayListOf<Breakpoint>() }

    private val resizedHandler: (ResizedEvent) -> Unit = { event ->

        if (layout != null) {
            childNodes.forEach {
                if (it is Element) {
                    it.parentResized(event)
                }
            }
        }
    }

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
        get() = this._style.display == "none"

    val _style: CSSStyleDeclaration
        get() = w3cElement.style

    val style: TypedStyle by lazy { TypedStyle(this) }

    var layout: Layout? by LayoutDelegate()

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
     */

    /**
     * Without borders.
     */
    val clientWidth: Int
        get() = w3cElement.clientWidth
    val clientHeight: Int
        get() = w3cElement.clientHeight

    /**
     * Including borders, but not margins.
     */
    val offsetWidth: Int
        get() = w3cElement.offsetWidth
    val offsetHeight: Int
        get() = w3cElement.offsetHeight


    val scrollWidth: Int
        get() = w3cElement.scrollWidth
    val scrollHeight: Int
        get() = w3cElement.scrollHeight

    val offsetTop: Int
        get() = w3cElement.offsetTop
    val offsetLeft: Int
        get() = w3cElement.offsetLeft

    val boundingClientRect: DOMRect
        get() = w3cElement.getBoundingClientRect()


    internal fun parentResized(event: ResizedEvent) {

        val hideOrShow = hideOnBreakpoints.any { it.contains(event.width) }
        if (hideOrShow) {
            hide()
        } else {
            show()
        }
    }

    internal fun callRender() {
        if (renderCalled) {
            throw  IllegalStateException("render has already been called for this element")
        }
        render()
        renderCalled = true
    }

    internal fun callDidMount() {
        if (didMountCalled) {
            throw IllegalStateException("didMount has already been called for this element")
        }
        didMount()
        didMountCalled = true
    }

    internal fun callWillUnMount() {
        willUnMount()
    }

    /**
     * Called before didMount(). On parent elements before children.
     * Override when needed, but remember to call super.render().
     */
    open protected fun render() {

    }

    /**
     * Called after render(). On children before parent elements.
     * Override when needed, but remember to call super.didMount().
     */
    open protected fun didMount() {

    }

    /**
     * Called just before the element is removed from the dom.
     */
    open protected fun willUnMount() {

    }

    internal fun callDidMountOnChildren() {

        for (child in childNodes) {
            if (child is Element) {
                child.callDidMountOnChildren()
                child.callDidMount()
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
            this._style.display = _displayBeforeHiding
        }
    }

    fun hide() {
        if (!hidden) {
            _displayBeforeHiding = this._style.display
            this._style.display = "none"
        }
    }

    fun focus(): Boolean {
        this.w3cElement.focus()
        return document.activeElement == this.w3cElement
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

    fun getComputedStyle(property: String): String {
        val htmlElementDynamic: dynamic = this.w3cElement
        if (htmlElementDynamic.currentStyle) {
            return htmlElementDynamic.currentStyle[property]
        } else if (js("window.getComputedStyle")) {
            return window.getComputedStyle(this.w3cElement).getPropertyValue(property)
        } else {
            return htmlElementDynamic.style[property]
        }
    }

    fun onResized(listener: (ResizedEvent) -> Unit) {
        resizedListeners.add(listener)

        if (resizedListeners.size == 1 && resizeSensor == null) {
            resizedListeners.add(resizedHandler)
            val sensor = ResizeSensor(this, resizedListeners)
            resizeSensor = sensor
            sensor.init()
        }
    }

    fun unResized(listener: (ResizedEvent) -> Unit) {
        resizedListeners.remove(listener)

        if (resizedListeners.size == 1 && resizedListeners[0] == resizedHandler) {
            resizedListeners.remove(resizedHandler)
        }

        if (resizedListeners.isEmpty()) {
            resizeSensor?.destroy()
        }
    }

    fun hideOn(vararg breakpoint: Breakpoint) {
        breakpoint.forEach { hideOnBreakpoints.add(it) }
    }

    /**
     * A rewrite of Marc J. Schmidt's ResizeSensor to Kotlin.
     * https://github.com/marcj/css-element-queries/
     *
     * Copyright Marc J. Schmidt
     * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
     */
    private inner class ResizeSensor(val element: Element, val resizedListeners: List<(ResizedEvent) -> Unit>) {

        private val sensorStyle: String = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"

        private var initialized = false

        private val sensor: Sensor by lazy {
            Sensor()
        }

        private var dirtyHeight: Boolean = false
        private var dirtyWidth: Boolean = false

        private var cachedWidth: Double = -1.0
        private var cachedHeight: Double = -1.0
        private var lastWidth: Double = -1.0
        private var lastHeight: Double = -1.0

        private val scrollHandler: (Event) -> Unit = {

            this.cachedWidth = element.w3cElement.offsetWidth.toDouble()
            this.cachedHeight = element.w3cElement.offsetHeight.toDouble()

            if (this.cachedWidth != this.lastWidth) {
                this.dirtyWidth = true
                this.lastWidth = this.cachedWidth
            }
            if (this.cachedHeight != this.lastHeight) {
                this.dirtyHeight = true
                this.lastHeight = this.cachedHeight
            }
            this.sensor.reset()
        }
        private val dirtyChecking: (Double) -> Unit = {

            if (!this.resizedListeners.isEmpty()) {
                if (this.dirtyWidth || this.dirtyHeight) {

                    this.notifyResizeListeners(ResizedEvent(
                            widthChanged = this.dirtyWidth,
                            width = this.lastWidth,
                            heightChanged = this.dirtyHeight,
                            height = this.lastHeight))


                    this.dirtyHeight = false
                    this.dirtyWidth = false
                }
                this.runDirtyChecking()
            }
        }

        fun init() {

            if (!this.initialized) {
                this.initialized = true
                console.log("ResizeSensor.init: sensor not initialized, initializing...")

                // Need to delay call to initializeSensor (give the browser some time) otherwise scroll events will not fire
                window.requestAnimationFrame { this.initializeSensor() }

            } else {
                console.log("ResizeSensor.init: sensor already initialized")
            }
        }

        fun destroy() {
            console.log("ResizeSensor.destroy")
            sensor.removeSelf()
        }

        private fun notifyResizeListeners(event: ResizedEvent) = this.resizedListeners.forEach { it(event) }

        private fun runDirtyChecking() {
            window.requestAnimationFrame(dirtyChecking)
        }


        private fun initializeSensor() {

            this.element.appendChild(sensor)

            if (this.getComputedPosition() == "static") {
                this.element.style.position = Position.relative
            }

            this.sensor.reset()
            this.runDirtyChecking()

            this.sensor.expandSensor.onScroll(scrollHandler)
            this.sensor.shrinkSensor.onScroll(scrollHandler)
        }

        private fun getComputedPosition(): String {
            return this.element.getComputedStyle("position")
        }

        inner class Sensor : Div() {

            val expandSensor: SensorExpand by lazy { SensorExpand() }
            val shrinkSensor: SensorShrink by lazy { SensorShrink() }

            override fun render() {
                super.render()

                this.addClass("resize-sensor")
                this._style.cssText = sensorStyle

                this.appendChild(expandSensor)
                this.appendChild(shrinkSensor)
            }

            fun reset() {
                this.expandSensor.reset()
                this.shrinkSensor.reset()
            }
        }

        inner class SensorExpand() : Div() {

            private val sensorExpandChildSensorStyle: String = "position: absolute; left: 0px; top: 0px; transition: 0s; -webkit-transition: 0"

            val child: Div by lazy {
                val child = Div()
                child._style.cssText = sensorExpandChildSensorStyle
                child
            }

            override fun render() {
                super.render()

                this.addClass("resize-sensor-expand")
                this._style.cssText = sensorStyle

                this.appendChild(child)
            }

            fun reset() {
                this.child.style.width = 100000.px
                this.child.style.height = 100000.px

                this.w3cElement.scrollLeft = 100000.toDouble()
                this.w3cElement.scrollTop = 100000.toDouble()
            }
        }

        inner class SensorShrink() : Div() {

            private val sensorShrinkChildSensorStyle: String = "position: absolute; left: 0; top: 0; transition: 0s;"

            val child: Div by lazy {
                val child = Div()
                child._style.cssText = sensorShrinkChildSensorStyle + " width: 200%; height: 200%"
                child
            }

            override fun render() {
                super.render()

                this.addClass("resize-sensor-shrink")
                this._style.cssText = sensorStyle

                this.appendChild(child)
            }

            fun reset() {
                this.w3cElement.scrollLeft = 100000.toDouble()
                this.w3cElement.scrollTop = 100000.toDouble()
            }
        }


    }

    data class ResizedEvent(val widthChanged: Boolean,
                            val width: Double,
                            val heightChanged: Boolean,
                            val height: Double)
}