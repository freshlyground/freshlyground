package fg.agent.browser

class Chromium(userAgent: String) : Browser {

    override val userAgent: String = userAgent

    override val name: String = Detector.name

    override val version: String? = resolveVersion()

    private fun resolveVersion(): String? {
        throw UnsupportedOperationException("not implemented")
    }

    companion object Detector : BrowserDetector {

        private val regex = Regex(".(Chromium)/(.*)")

        override val name: String = "Chromium"

        override fun matches(userAgent: String): Boolean {
            return userAgent.contains(regex)
        }

        override fun browser(userAgent: String): Chromium {
            return Chromium(userAgent)
        }
    }
}