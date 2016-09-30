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
            width = "40px"
            height = "40px"
            borderRadius = "50%"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}