package fg.keyboard

class Modifiers(list: List<Modifier>) {

    val list: List<Modifier> = list.sorted()

    fun isNotEmpty(): Boolean {
        return list.isNotEmpty()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Modifiers) return false

        if (list != other.list) return false

        return true
    }

    override fun hashCode(): Int {
        return list.hashCode()
    }

    override fun toString(): String {
        return list.joinToString("+")
    }


}