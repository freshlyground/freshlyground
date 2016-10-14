package fg.keyboard

class Key(val key: String, val modifiers: Modifiers) {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Key) return false

        if (key != other.key) return false
        if (modifiers != other.modifiers) return false

        return true
    }

    override fun hashCode(): Int {
        var result = key.hashCode()
        result = 31 * result + modifiers.hashCode()
        return result
    }

    override fun toString(): String {
        if (modifiers.isNotEmpty()) {
            return "$modifiers+$key"
        } else {
            return key
        }
    }

    companion object Factory {

        fun from(str: String): Key {

            val splitted = str.split("+")
            val key = splitted.last()
            val modifiers: MutableList<Modifier> = arrayListOf()
            if (splitted.size > 1) {
                for (i in 0..splitted.lastIndex - 1) {
                    val modifierAsString = splitted[i]
                    modifiers.add(Modifier.valueOf(modifierAsString))
                }
            }

            return Key(key = key, modifiers = Modifiers(modifiers))
        }

        fun from(key: String, modifiers: Modifiers): Key {
            return Key(key = key, modifiers = modifiers)
        }
    }
}