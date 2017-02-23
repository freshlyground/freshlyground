package fg.md.icon

import fg.elements.ClassSelector
import fg.elements.HTML
import fg.elements.I
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.and
import kotlin.properties.Delegates

class MDIcon : I() {

    var size: Size? by Delegates.observable(null) { property, old: Size?, new: Size? ->

        if (old != null) {
            removeClass(old.cssClassName)
        }
        if (new != null) {
            addClass(new.cssClassName)
        }
    }

    override fun render() {
        super.render()
        addClass("material-icons")
        addClass(classSelector)
    }

    enum class Size(val cssClassName: ClassSelector) {
        s18px("md-18".toClassSelector()),
        s24px("md-24".toClassSelector()),
        s36px("md-36".toClassSelector()),
        s48px("md-48".toClassSelector())
    }

    companion object MDIcon : StyledClass {

        override val classSelector = "md-icon".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            and(Size.s18px.cssClassName) {
                _fontSize = "18px"
            }

            and(Size.s24px.cssClassName) {
                _fontSize = "24px"
            }

            and(Size.s36px.cssClassName) {
                _fontSize = "36px"
            }

            and(Size.s48px.cssClassName) {
                _fontSize = "48px"
            }
        }

        init {
            HTML.registerStyle(this)
        }
    }
}