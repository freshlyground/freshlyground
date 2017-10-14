package fg.elements

import org.w3c.dom.Window
import org.w3c.dom.events.Event

fun Window.onResize(listener: (Event) -> Unit) {

    kotlin.browser.window.addEventListener("resize", listener)
}