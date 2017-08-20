package fg.agent.browser

import kotlin.test.Test
import kotlin.test.assertEquals

class FirefoxTest {

    @Test fun resolveVersion() {

        assertEquals("50.0", Firefox(UA_FIREFOX_50_ON_MAC_10_12).version)
    }
}
