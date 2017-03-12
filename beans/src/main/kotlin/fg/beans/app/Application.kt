package fg.beans.app

import fg.elements.BODY
import fg.elements.Div
import fg.elements.HTML
import kotlin.properties.Delegates

open class Application {

    val CONTENT: Div by lazy { Content() }
    val POPUPS: Div by lazy { Popups() }

    init {
        Statics.GET = this
    }

    fun start() {

        BODY.appendChild(CONTENT)
        BODY.appendChild(POPUPS)

        HTML.init()
        render()
    }

    open fun render() {

    }

    companion object Statics {

        var GET: Application by Delegates.notNull()
            private set
    }
}