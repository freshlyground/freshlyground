package fg.base.experimental.coroutines

import fg.elements.*
import fg.style.colour.RgbColor
import toStacktrace
import kotlin.coroutines.experimental.Continuation
import kotlin.coroutines.experimental.CoroutineContext
import kotlin.coroutines.experimental.EmptyCoroutineContext
import kotlin.coroutines.experimental.startCoroutine


fun launch(block: suspend () -> Unit) {
    block.startCoroutine(object : Continuation<Unit> {
        override val context: CoroutineContext get() = EmptyCoroutineContext
        override fun resume(value: Unit) {}
        override fun resumeWithException(e: Throwable) {
            console.error(e.toStacktrace())
        }
    })
}

fun launch(element: Element, block: suspend () -> Unit) {
    block.startCoroutine(object : Continuation<Unit> {
        override val context: CoroutineContext get() = EmptyCoroutineContext
        override fun resume(value: Unit) {}
        override fun resumeWithException(e: Throwable) {
            val stacktrace = e.toStacktrace()

            console.error(stacktrace)

            // TODO: Make error box plug-able?

            val preEl = Pre()
            preEl._style.whiteSpace = "pre-wrap"
            preEl._style.margin = "0.5em"
            preEl.appendChild(Text(stacktrace))

            val errorContainerElement = Div() with {
                _style.border = "1px solid red"
                _style.margin = "0.5em"

                div {
                    style.backgroundColor = RgbColor.RED
                    style.color = RgbColor.WHITE
                    _style.fontFamily = "monospace"
                    +"Unexpected error while executing"
                }
                appendChild(preEl)
            }
            element.appendChild(errorContainerElement)
        }
    })
}




