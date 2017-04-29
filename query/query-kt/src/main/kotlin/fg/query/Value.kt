package fg.query

data class Value(val obj: Any?) {

    override fun toString(): String {
        if (obj == null) {
            return "[null]"
        } else if (obj is String) {
            return "'$obj'"
        } else {
            return obj.toString()
        }
    }
}