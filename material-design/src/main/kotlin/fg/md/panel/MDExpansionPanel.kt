package fg.md.panel

import fg.elements.Div
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class MDExpansionPanel : Div() {

    var collapsedPanel: MDCollapsedPanel? = null

    var expandedPanel: MDExpandedPanel? = null

    override fun render() {
        super.render()
    }

    private fun renderState(state: State) {
        when (state) {
            State.COLLAPSED -> {
                expandedPanel?.hide()
                collapsedPanel?.show()
            }
            State.EXPANDED -> {
                collapsedPanel?.hide()
                expandedPanel?.show()
            }
        }
    }

    enum class State {
        COLLAPSED,
        EXPANDED
    }

    companion object MDExpansionPanel : StyledClass {

        override val classSelector = "md-expansion-panel".toClassSelector()

        val closed = "closed".toClassSelector()

        override val rule: ClassRule.() -> Unit = {


        }

        init {
            HTML.registerStyle(this)
        }
    }
}