fun Throwable.toStacktrace(): String {
    var stackTrace: String = ""
    var thisError: dynamic = this
    if (thisError.stack != null) {
        stackTrace += thisError.stack

        if (this.cause != null) {
            stackTrace += "\nCaused by: " + this.cause!!.toStacktrace()
            return stackTrace
        }
    }
    return stackTrace
}