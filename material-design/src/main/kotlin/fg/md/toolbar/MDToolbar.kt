package fg.md.toolbar

import fg.elements.Div
import fg.elements.HTML
import fg.elements.Span
import fg.elements.StyledClass
import fg.elements.style.typed.Flex
import fg.elements.toClassSelector
import fg.elements.with
import fg.md.Context
import fg.md.pkg
import fg.style.ClassRule

class MDToolbar : Div() {

    override fun render() {
        super.render()

        addClass(classSelector)

        style.backgroundColor = Context.theme.toolbar
    }

    companion object MDToolbar : StyledClass {

        fun spacer(): Span {
            val span = Span() with { style.flex = Flex(1) }
            return span
        }

        override val classSelector = "$pkg-toolbar".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            display = "flex"
            flexDirection = "row"
            alignItems = "center"
        }

        init {
            HTML.registerStyle(this)
        }
    }
}