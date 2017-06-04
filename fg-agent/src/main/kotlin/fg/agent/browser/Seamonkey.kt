package fg.agent.browser

class Seamonkey(userAgent: String) : Browser {

    override val userAgent: String = userAgent

    override val name: String = "Seamonkey"

    override val version: String? = resolveVersion()

    private fun resolveVersion(): String? {
        throw UnsupportedOperationException("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    companion object Detector : BrowserDetector {

        private val regex = Regex(".(Seamonkey)/(.*)")

        override val name: String = "Seamonkey"

        override fun matches(userAgent: String): Boolean {
            return userAgent.contains(regex)
        }

        override fun browser(userAgent: String): Browser {
            return Seamonkey(userAgent)
        }
    }
}