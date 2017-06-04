package fg.agent.browser

/**
 * https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
 */
class InternetExplorer(userAgent: String) : Browser {

    override val userAgent: String = userAgent

    override val name: String = Detector.name

    override val version: String? = resolveVersion()

    private fun resolveVersion(): String? {
        val ie11Occurrence = regexIE11.findAll(userAgent).lastOrNull()
        val beforeIE11Occurrence = regexBeforeIE11.find(userAgent)

        if (ie11Occurrence != null && beforeIE11Occurrence == null) {
            return ie11Occurrence.groupValues.last()
        }

        return beforeIE11Occurrence?.groupValues?.lastOrNull()
    }

    companion object Detector : BrowserDetector {

        private val regexIE11 = Regex(".Trident/(.*?); rv:(.\\d.\\d?)")
        private val regexBeforeIE11 = Regex("; MSIE (.*?);")

        override val name: String = "IE"

        override fun matches(userAgent: String): Boolean {
            return userAgent.contains(regexIE11) || userAgent.contains(regexBeforeIE11)
        }

        override fun browser(userAgent: String): InternetExplorer {
            return InternetExplorer(userAgent)
        }
    }
}