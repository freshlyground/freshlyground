package fg.md.panel

import fg.beans.action.SelectableAction
import fg.elements.Div
import fg.elements.HTML
import fg.elements.Percent
import fg.elements.StyledClass
import fg.elements.px
import fg.elements.style.typed.JustifyContent
import fg.elements.toClassSelector
import fg.md.Context
import fg.md.Theme
import fg.md.toolbar.MDToolbar
import fg.style.ClassRule
import kotlin.reflect.KProperty

class MDCollapsedPanel(val expandAction: SelectableAction) : Div() {

    private val expandButton: MDExpandButton by lazy { MDExpandButton(expandAction) }

    internal val outerToolbar: MDToolbar by lazy {
        val outerToolbar = MDToolbar()
        outerToolbar.style.paddingLeft = 24.px
        outerToolbar.style.paddingRight = 24.px
        outerToolbar.style.height = 48.px
        outerToolbar.style.justifyContent = JustifyContent.spaceBetween
        outerToolbar
    }
    val toolbar: MDToolbar by lazy {
        val toolbar = MDToolbar()
        toolbar.style.width = Percent(100.0)
        toolbar.style.justifyContent = JustifyContent.spaceBetween
        toolbar
    }

    private val themeChangedHandler: (Theme, KProperty<*>, Any?, Any?) -> Unit = {
        theme, property, old, new ->

        when (property.name) {
            Theme::cardsNdialogs.name -> {
                style.backgroundColor = Context.theme.background
            }
        }
    }

    override fun render() {
        super.render()

        addClass(classSelector)

        appendChild(outerToolbar)
        outerToolbar.appendChild(toolbar)
        outerToolbar.appendChild(expandButton)

        style.backgroundColor = Context.theme.cardsNdialogs
    }

    override fun didMount() {
        super.didMount()

        Context.theme.onPropertyChanged(themeChangedHandler)
    }

    companion object MDCollapsedPanel : StyledClass {

        override val classSelector = "$pkg-collapsed-panel".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            display = "block"
            position = "relative"
            borderRadius = "2px"
            boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
            fontFamily = "Roboto, 'Helvetica Neue', sans-serif"

            backgroundSize = "cover"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}