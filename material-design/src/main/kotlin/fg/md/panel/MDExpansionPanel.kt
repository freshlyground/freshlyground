package fg.md.panel

import fg.beans.action.ActionPerform
import fg.beans.action.SelectableAction
import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.onBlur
import fg.elements.onFocus
import fg.elements.onKeyUp
import fg.elements.toClassSelector
import fg.md.icon.MDIconProvider
import fg.style.ClassRule
import fg.style.adjacentSibling
import fg.style.colour.RgbColor
import fg.style.focus
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import kotlin.properties.Delegates

class MDExpansionPanel : Div() {

    private val expandCollapseHandler: (ActionPerform) -> Unit = { action ->
        state = if (state == State.EXPANDED)
            State.COLLAPSED
        else
            State.EXPANDED
    }

    var state: State by Delegates.observable(State.COLLAPSED) { property, old, new ->
        renderState(new)
    }

    internal val expandAction: SelectableAction by lazy {
        SelectableAction(selectedIcon = MDIconProvider.expand_less,
                deselectedIcon = MDIconProvider.expand_more, perform = expandCollapseHandler)
    }

    val collapsed: MDCollapsedPanel by lazy { MDCollapsedPanel(expandAction) }

    val expanded: MDExpandedPanel by lazy { MDExpandedPanel(expandAction) }

    var focused: Boolean = false
        private set

    private val focusHandler: (event: Event) -> Unit = {

        focused = true
        toggleClass("focused", true)
        onFocus()
    }

    private val blurHandler: (event: Event) -> Unit = {

        focused = false
        toggleClass("focused")
        unFocus()
    }

    private val keyUpHandler: (event: KeyboardEvent) -> Unit = { event ->

        if (event.which == 13) {
            toggle()
        }
    }

    open protected fun onFocus() {
        if (isCollapsed()) {
            collapsed.outerToolbar.style.backgroundColor = RgbColor(238, 238, 238)
            collapsed.toolbar.style.backgroundColor = RgbColor(238, 238, 238)
            //collapsed.outerToolbar.focus()
        } else {
            expanded.outerToolbar.style.backgroundColor = RgbColor(238, 238, 238)
            expanded.toolbar.style.backgroundColor = RgbColor(238, 238, 238)
            //expanded.outerToolbar.focus()
        }
    }

    open protected fun unFocus() {
        if (isCollapsed()) {
            collapsed.outerToolbar.style.backgroundColor = RgbColor.WHITE
            collapsed.toolbar.style.backgroundColor = RgbColor.WHITE
        } else {
            expanded.outerToolbar.style.backgroundColor = RgbColor.WHITE
            expanded.toolbar.style.backgroundColor = RgbColor.WHITE
        }
    }

    fun isExpanded(): Boolean {
        return !expanded.hidden
    }

    fun isCollapsed(): Boolean {
        return !collapsed.hidden
    }

    fun toggle() {
        expandAction.perform(this)
    }

    override fun render() {
        super.render()

        addClass(classSelector)
        _tabindex = "0"

        prependChild(expanded)
        prependChild(collapsed)

        collapsed.show()
        expanded.hide()
    }

    override fun didMount() {
        super.didMount()

        onFocus(focusHandler)
        onBlur(blurHandler)
        onKeyUp(keyUpHandler)
    }

    private fun renderState(state: State) {
        when (state) {
            State.COLLAPSED -> {
                expanded.hide()
                collapsed.show()
            }
            State.EXPANDED -> {
                collapsed.hide()
                expanded.show()
            }
        }
    }

    enum class State {
        COLLAPSED,
        EXPANDED
    }

    companion object MDExpansionPanel : StyledClass {

        override val classSelector = "$pkg-expansion-panel".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            adjacentSibling(classSelector) {
                marginTop = "1px"
            }

            focus {
                outline = "none"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}