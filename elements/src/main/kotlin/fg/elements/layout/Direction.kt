package fg.elements.layout

import fg.elements.style.typed.FlexDirection

enum class Direction(val flex: FlexDirection) {
    ROW(FlexDirection.row),
    COLUMN(FlexDirection.column);

    companion object {
        fun from(string: String?): Direction? {
            if (string == null) {
                return null
            }
            return Direction.valueOf(string)
        }
    }
}

fun Direction?.toLayout(): Layout? {
    if (this == null) {
        return null
    }
    return Layout(this)
}