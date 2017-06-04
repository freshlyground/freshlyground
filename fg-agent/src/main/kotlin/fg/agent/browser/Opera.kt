package fg.agent.browser

class Opera(userAgent: String) : Browser {

    override val userAgent: String = userAgent

    override val name: String = Detector.name

    override val version: String? = resolveVersion()

    private fun resolveVersion(): String? {
        val occurrences = regexPresto.findAll(userAgent)
        val occurrence = occurrences.firstOrNull()
        return occurrence?.groupValues?.last()
    }

    companion object Detector : BrowserDetector {

        private val regexBlink = Regex(".OPR/(.*)")
        private val regexPresto = Regex(".Opera/(.*)")

        override val name: String = "Opera"

        override fun matches(userAgent: String): Boolean {
            return userAgent.contains(regexPresto) || userAgent.contains(regexBlink)
        }

        override fun browser(userAgent: String): Opera {
            return Opera(userAgent)
        }
    }
}