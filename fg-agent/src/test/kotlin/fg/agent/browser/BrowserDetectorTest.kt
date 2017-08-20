package fg.agent.browser

import kotlin.test.Test
import kotlin.test.assertEquals

class BrowserDetectorTest {

    @Test fun detectBrowser_Safari() {

        val browser = BrowserDetector.detectBrowser(UA_SAFARI_10_ON_MAC_10_12)
        assertEquals(Safari.name, browser.name)
    }

    @Test fun detectBrowser_Firefox() {

        val browser = BrowserDetector.detectBrowser(UA_FIREFOX_50_ON_MAC_10_12)
        assertEquals(Firefox.name, browser.name)
    }

    @Test fun detectBrowser_Chrome() {

        val browser = BrowserDetector.detectBrowser(UA_CHROME_55_ON_MAC_10_12)
        assertEquals(Chrome.name, browser.name)
    }

    @Test fun detectBrowser_EDGE_12_ON_WINDOWS_8_1() {

        assertEquals(Edge.name,
                BrowserDetector.detectBrowser(UA_EDGE_12_ON_WINDOWS_8_1).name)
    }

    @Test fun detectBrowser_EDGE_12_ON_WINDOWS_10() {

        assertEquals(Edge.name,
                BrowserDetector.detectBrowser(UA_EDGE_12_ON_WINDOWS_10).name)
    }

    @Test fun detectBrowser_IE_11_ON_WINDOWS_8_1() {

        assertEquals(InternetExplorer.name,
                BrowserDetector.detectBrowser(UA_IE_11_ON_WINDOWS_8_1).name)
    }

    @Test fun detectBrowser_OPERA_42_ON_MAC_10_12() {

        val browser = BrowserDetector.detectBrowser(UA_OPERA_42_ON_MAC_10_12)
        assertEquals(Opera.name, browser.name)
    }

}

