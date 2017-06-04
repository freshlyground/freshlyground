package fg.agent.browser

import kotlin.browser.window

interface BrowserDetector {

    val name: String

    fun matches(userAgent: String): Boolean

    fun browser(userAgent: String): Browser

    companion object {

        private val browserDetectors: List<BrowserDetector> = listOf(
                Chrome,
                Firefox,
                Safari,
                Edge,
                InternetExplorer,
                Opera,
                Seamonkey,
                Chromium
        )

        fun detectBrowser(userAgent: String = window.navigator.userAgent): Browser {

            val detections: MutableList<Browser> = arrayListOf()
            for (browserDetector in browserDetectors) {
                if (browserDetector.matches(userAgent)) {
                    detections.add(browserDetector.browser(userAgent))
                }
            }
            if (detections.size == 1) {
                return detections[0]
            } else if (detections.size == 0) {

                return Unknown(userAgent)
            } else {
                return Ambigous(userAgent, detections)
            }
        }
    }
}