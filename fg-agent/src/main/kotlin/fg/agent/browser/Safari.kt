package fg.agent.browser

/**
 * Versions:
 *  10 : 2016-09
 */
class Safari(userAgent: String) : Browser {

    private val versionRegex = Regex(".Version/(.*)\\s")

    override val userAgent: String = userAgent

    override val name: String = Detector.name

    override val version: String? = resolveVersion()

    private fun resolveVersion(): String? {
        val occurrences = versionRegex.findAll(userAgent)
        val occurrence = occurrences.firstOrNull()
        return occurrence?.groupValues?.last()
    }

    companion object Detector : BrowserDetector {

        private val regex = Regex(".Safari/(.*)")

        override val name: String = "Safari"

        override fun matches(userAgent: String): Boolean {
            return userAgent.contains(regex)
                    && !Chrome.matches(userAgent)
                    && !Chromium.matches(userAgent)
                    && !Edge.matches(userAgent)
                    && !Opera.matches(userAgent)
        }

        override fun browser(userAgent: String): Safari {
            return Safari(userAgent)
        }
    }
}