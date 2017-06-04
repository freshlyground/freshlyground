@file:Suppress("UNCHECKED_CAST")

package fg.keyboard

import org.w3c.dom.Element
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent


fun Element.onKeyUp(listener: (keyboardEvent: KeyboardEvent) -> Unit) {
    this.addEventListener("keyup", listener as ((Event) -> Unit))
}

fun Element.unKeyUp(listener: (keyboardEvent: KeyboardEvent) -> Unit) {
    this.removeEventListener("keyup", listener as ((Event) -> Unit))
}

fun Element.onKeyPress(listener: (keyboardEvent: KeyboardEvent) -> Unit) {
    this.addEventListener("keypress", listener as ((Event) -> Unit))
}

fun Element.unKeyPress(listener: (keyboardEvent: KeyboardEvent) -> Unit) {
    this.removeEventListener("keypress", listener as ((Event) -> Unit))
}

fun Element.onKeyDown(listener: (keyboardEvent: KeyboardEvent) -> Unit) {
    this.addEventListener("keydown", listener as ((Event) -> Unit))
}

fun Element.unKeyDown(listener: (keyboardEvent: KeyboardEvent) -> Unit) {

    this.removeEventListener("keydown", listener as ((Event) -> Unit))
}

