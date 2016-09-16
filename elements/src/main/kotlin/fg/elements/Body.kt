package fg.elements

import kotlin.browser.document

val body = Body()

class Body internal constructor() : Element(existingElement = document.body) {

    override val mounted: Boolean = true

    internal fun init() {

        render()
        renderChildren()

        mountChildren()
    }

}