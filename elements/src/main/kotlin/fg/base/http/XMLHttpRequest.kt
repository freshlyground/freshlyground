package fg.base.http

import org.w3c.xhr.XMLHttpRequest
import kotlin.coroutines.experimental.*
import kotlin.js.Promise


suspend fun <T> Promise<T>.await(): T = suspendCoroutine { cont ->
    then({ cont.resume(it) }, { cont.resumeWithException(it) })
}


suspend fun send(request: XMLHttpRequest, body: Any? = null): String = suspendCoroutine { cont ->

    request.onreadystatechange = { event ->

        val readyState = request.readyState
        if (readyState == XMLHttpRequest.Companion.DONE) {

            if (request.status == 200.toShort()) {
                cont.resume(request.responseText)
            } else if (request.status == 404.toShort()) {
                cont.resumeWithException(NotFoundException(request.responseText))
            } else if (request.status == 500.toShort()) {
                cont.resumeWithException(InternalServerErrorException(request.responseText))
            } else {
                cont.resumeWithException(UnexpectedStatusException(request.responseText))
            }
        }
    }
    request.send(body)
}


