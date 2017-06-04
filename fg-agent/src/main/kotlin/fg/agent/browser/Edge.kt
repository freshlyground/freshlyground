package fg.agent.browser

class Edge(userAgent: String) : Browser {

    override val userAgent: String = userAgent

    override val name: String = Detector.name

    override val version: String? = resolveVersion()

    private fun resolveVersion(): String? {
        val occurrences = regex.findAll(userAgent)
        val occurrence = occurrences.firstOrNull()
        return occurrence?.groupValues?.last()
    }

    companion object Detector : BrowserDetector {

        private val regex = Regex(".(Edge)/(.*)")

        override val name: String = "Edge"

        override fun matches(userAgent: String): Boolean {
            return userAgent.contains(regex)
        }

        override fun browser(userAgent: String): Edge {
            return Edge(userAgent)
        }
    }
}