package fg.base


class URL(val scheme: String,
          val host: String,
          val port: String,
          val path: Path = Path.ROOT,
          val query: Query = Query.NONE,
          val fragment: String = "") : Comparable<URL> {

    val parents: List<URL>
        get() {

            val parents = arrayListOf<URL>()
            var parent = parent
            while (parent != null) {
                parents.add(parent)
                parent = parent.parent
            }
            return parents.reversed()
        }

    val parent: URL?
        get() {
            if (!hasParent) {
                return null
            }
            val parentPath = path.parent
            return URL(scheme, host, port, parentPath, query, fragment)
        }

    val hasParent: Boolean
        get() {
            return path.hasParent
        }

    fun append(path: Path): URL {
        return URL(scheme = scheme,
                host = host,
                port = port,
                path = this.path.append(path),
                query = query,
                fragment = fragment)
    }

    fun replaceParam(name: String, value: String): URL {

        val mutableMap: MutableMap<String, String> = mutableMapOf()
        if (query != null) {
            mutableMap.putAll(query.map)
        }
        mutableMap.put(name, value)

        return URL(scheme = scheme,
                host = host,
                port = port,
                path = path,
                query = Query(mutableMap),
                fragment = fragment)
    }

    override fun compareTo(other: URL): Int {

        var compare: Int
        compare = this.path.compareTo(other.path)
        if (compare != 0) {
            return compare
        }

        compare = this.host.compareTo(other.host)
        if (compare != 0) {
            return compare
        }

        compare = this.port.compareTo(other.port)
        if (compare != 0) {
            return compare
        }

        compare = CompareTo.nullSafe(this.query, other.query)
        if (compare != 0) {
            return compare
        }

        compare = this.fragment.compareTo(other.fragment)
        if (compare != 0) {
            return compare
        }

        compare = this.scheme.compareTo(other.scheme)
        if (compare != 0) {
            return compare
        }

        return compare
    }

    override fun toString(): String {
        var str: String = ""

        if (scheme.isNotBlank() && host.isNotBlank()) {
            str = scheme + "://" + host
        }
        if (port.isNotBlank()) str += ":" + port

        str += path.toString()

        if (query != null) str += query
        if (fragment.isNotBlank()) str += "#" + fragment

        return str
    }

    companion object Factory {

        fun from(asString: String): URL {
            var remaining = asString

            val scheme = remaining.substringBefore("://", "")
            remaining = remaining.substringAfter("://")

            val fragment = remaining.substringAfter("#", "")
            remaining = remaining.substringBefore("#")

            val query = remaining.substringAfter("?", "")
            remaining = remaining.substringBefore("?")

            val path = "/" + remaining.substringAfter("/", "")
            remaining = remaining.substringBefore("/")

            val port = remaining.substringAfter(":", "")
            remaining = remaining.substringBefore(":")

            val host = remaining

            return URL(scheme = scheme,
                    host = host,
                    port = port,
                    path = Path.Factory.from(path),
                    query = Query.from(query),
                    fragment = fragment)
        }
    }

    data class Query(val map: Map<String, String>) {

        override fun toString(): String {

            if (map.isEmpty()) {
                return ""
            }

            var s = "?"
            for ((key, value) in map) {
                if (s.length > 1) {
                    s += "&"
                }
                s += key + "=" + value
            }
            return s
        }

        companion object Factory {

            val NONE = Query(mapOf())

            fun from(vararg pairs: Pair<String, String>): Query {
                return Query(linkedMapOf(*pairs))
            }

            fun from(string: String): Query {

                val withoutQuestion = if (string.startsWith("?")) string.substringAfter("?") else string
                if (string.isEmpty()) {
                    return NONE
                }
                val splitted = withoutQuestion.split("&")
                val map: MutableMap<String, String> = mutableMapOf()
                for (i in 0..splitted.lastIndex) {
                    val name = splitted[i].substringBefore("=")
                    val value = splitted[i].substringAfter("=")
                    if (name.isNotBlank()) {
                        map.put(name, value)
                    }
                }
                return Query(map)
            }
        }
    }
}