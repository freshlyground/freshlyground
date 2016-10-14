package fg.base

open class Path protected constructor(
        val absolute: Boolean,
        val trailingSlash: Boolean,
        val elements: List<Element>) : Comparable<Path> {

    private val asString: String

    init {
        var string = this.elements.joinToString(separator = "/", transform = {
            it.toString()
        })
        if (this.absolute) {
            string = "/" + string
        }
        if (this.trailingSlash) {
            string += "/"
        }
        this.asString = string
    }

    open fun append(other: Path): Path {
        val elements = elements.toMutableList()
        elements.addAll(other.elements)
        return Path(absolute = absolute, trailingSlash = other.trailingSlash, elements = elements)
    }

    fun subPathAfter(other: Path): Path {

        var fromIndex = 0
        for (i in 0..this.elements.lastIndex) {
            if (i >= other.size) {
                fromIndex = i
                break
            }
            if (!this.elements[i].equals(other.getElement(i))) {
                fromIndex = i + 1
            }
        }
        val elementsAfter: List<Element> = this.elements.subList(fromIndex, this.elements.size)
        return Path(absolute = absolute, trailingSlash = trailingSlash, elements = elementsAfter)
    }

    val size: Int
        get() {
            return elements.size
        }

    val hasParent: Boolean
        get() {
            return elements.size > 1
        }

    val parent: Path
        get() {
            if (elements.size == 1) {
                throw IllegalArgumentException("Path as not parent")
            }
            return Path(absolute = absolute, trailingSlash = trailingSlash, elements = elements.subList(0, elements.lastIndex - 1))
        }

    val parents: List<Path>
        get() {

            val parents = arrayListOf<Path>()
            var parent = if (hasParent) parent else null
            while (parent != null) {
                parents.add(parent)
                parent = if (parent.hasParent) parent.parent else null
            }
            return parents.reversed()
        }

    fun getElement(index: Int): Element {
        return elements[index]
    }

    override fun compareTo(other: Path): Int {
        return this.asString.compareTo(other.asString)
    }

    override fun toString(): String {
        return asString
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Path) return false

        if (absolute != other.absolute) return false
        if (trailingSlash != other.trailingSlash) return false
        if (elements != other.elements) return false

        return true
    }

    override fun hashCode(): Int {
        var result = absolute.hashCode()
        result += 31 * result + trailingSlash.hashCode()
        result += 31 * result + elements.hashCode()
        return result
    }

    companion object Factory {

        val ROOT = Path(absolute = true, trailingSlash = false, elements = listOf())

        fun from(string: String): Path {

            val absolute = string.startsWith("/")
            val trailingSlash = string.endsWith("/")
            val elementsAsString = string.split("/")
            val elements: MutableList<Element> = arrayListOf()
            for (elementAsString in elementsAsString) {
                if (elementAsString.isNotBlank()) {
                    elements.add(Element(elementAsString))
                }
            }
            return Path(absolute = absolute, trailingSlash = trailingSlash, elements = elements)
        }
    }

    open class Element(val value: String) {

        init {
            if (value.isBlank()) {
                throw IllegalArgumentException("An Element cannot be blank")
            }
        }

        open fun matches(other: Element): Boolean {
            return other.value.equals(other = other.value, ignoreCase = true)
        }

        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other !is Element) return false

            if (value != other.value) return false

            return true
        }

        override fun hashCode(): Int {
            return value.hashCode()
        }

        override fun toString(): String {
            return value
        }
    }
}