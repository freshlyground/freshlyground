package fg.beans.deck

import fg.beans.pkg
import fg.elements.Div
import fg.elements.Element
import fg.elements.HTML
import fg.elements.Node
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.style.ClassRule

class Deck : Div() {

    private val deck: MutableList<Element> = arrayListOf()

    override fun childAdded(child: Node) {
        super.childAdded(child)

        if (child !is Element) {
            throw IllegalArgumentException("Only a Element can be added to a Deck")
        }
        deck.add(child)

        if (deck.size > 1) {
            child.hide()
        } else {
            child.show()
        }
    }

    override fun render() {
        super.render()

        addClass(classSelector)
    }

    companion object Deck : StyledClass {

        override val classSelector = "$pkg-deck".toClassSelector()

        override val rule: ClassRule.() -> Unit = {
        }

        init {
            HTML.registerStyle(this)
        }
    }
}