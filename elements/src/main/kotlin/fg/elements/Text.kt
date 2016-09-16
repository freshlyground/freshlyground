package fg.elements

import kotlin.browser.document

class Text(text: String? = null,
           existingNode: org.w3c.dom.Text? = null) :
        Node(w3cNode = existingNode ?: document.createTextNode(text!!)) {
}