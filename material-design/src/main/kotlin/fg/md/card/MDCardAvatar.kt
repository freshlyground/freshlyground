package fg.md.card

import fg.elements.HTML
import fg.elements.Img
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class MDCardAvatar(src: String) : Img(src = src) {

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object MDCardAvatar : StyledClass {

        override val classSelector = "md-card-avatar".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
            _width = "40px"
            _height = "40px"
            _borderRadius = "50%"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}