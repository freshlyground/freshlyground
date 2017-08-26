package fg.keyboard

data class Keys(val list: List<Key>) {

    constructor(vararg key: Key) : this(key.toList())

    companion object {

        fun from(key: Key): Keys {
            return Keys(listOf(key))
        }

        fun from(str: String): Keys {

            val keysList: MutableList<Key> = arrayListOf()
            val splitted = str.split(" ")
            for (keyAsString in splitted) {
                keysList.add(Key.from(keyAsString))
            }
            return Keys(keysList)
        }
    }
}