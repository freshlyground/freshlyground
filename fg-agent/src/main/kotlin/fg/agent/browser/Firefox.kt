package fg.agent.browser


class Firefox(userAgent: String) : Browser {

    override val userAgent: String = userAgent

    override val name: String = Detector.name

    override val version: String? = resolveVersion()

    private fun resolveVersion(): String? {
        val occurrences = regex.findAll(userAgent)
        val occurrence = occurrences.firstOrNull()
        return occurrence?.groupValues?.last()
    }

    companion object Detector : BrowserDetector {

        private val regex = Regex(".Firefox/(.*)")

        override val name: String = "Firefox"

        override fun matches(userAgent: String): Boolean {
            return userAgent.contains(regex)
                    && !Chromium.matches(userAgent)
        }

        override fun browser(userAgent: String): Firefox {
            return Firefox(userAgent)
        }
    }
}