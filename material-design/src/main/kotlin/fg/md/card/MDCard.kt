package fg.md.card

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.md.Context
import fg.md.Theme
import fg.style.ClassRule
import kotlin.reflect.KProperty

open class MDCard : Div() {

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

        style.backgroundColor = Context.theme.cardsNdialogs
    }

    override fun didMount() {
        super.didMount()

        Context.theme.onPropertyChanged(themeChangedHandler)
    }

    companion object MDCard : StyledClass {

        override val classSelector = "md-card".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _display = "block"
            _position = "relative"
            _borderRadius = "2px"
            _boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
            _fontFamily = "Roboto, 'Helvetica Neue', sans-serif"

            _backgroundSize = "cover"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}

