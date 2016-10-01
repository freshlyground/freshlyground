package fg.md.card

import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.md.Context
import fg.md.Theme
import fg.style.ClassRule
import kotlin.reflect.KProperty

open class MDCard : fg.elements.Div() {

    override fun render() {
        super.render()

        addClass(classSelector)

        style.backgroundColor = Context.theme.cardsNdialogs.toString()
    }

    override fun didMount() {
        super.didMount()

        Context.theme.onPropertyChanged(themeChangedHandler)
    }

    private val themeChangedHandler: (Theme, KProperty<*>, Any?, Any?) -> Unit = {
        theme, property, old, new ->

        when (property.name) {
            Theme::cardsNdialogs.name -> {
                style.backgroundColor = Context.theme.background.toString()
            }
        }
    }

    companion object MDCard : StyledClass {

        override val classSelector = "md-card".toClassSelector()

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

