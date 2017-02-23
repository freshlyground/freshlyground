package fg.md.card

import fg.elements.HTML
import fg.elements.Img
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class MDCardImage(src: String) : Img(src = src) {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardImage : StyledClass {

        override val classSelector = "md-card-image".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _height = "100%"
            _width = "100%"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}