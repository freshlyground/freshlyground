package fg.base

import kotlin.browser.window

object OSDetector {

    val detected: OS by lazy { detect() }

    private fun detect(): OS {
        val navigator = window.navigator

        if (navigator.appVersion.contains("Win")) {
            return OS.WINDOWS
        } else if (navigator.appVersion.contains("Mac")) {
            return OS.MAC
        } else if (navigator.appVersion.contains("X11")) {
            return OS.UNIX
        } else if (navigator.appVersion.contains("Linux")) {
            return OS.LINUX
        } else {
            return OS.UNKNOWN
        }
    }
}