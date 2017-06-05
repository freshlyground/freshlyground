package fg.agent.browser

import org.junit.Test
import kotlin.test.assertEquals

class ChromeTest {

    @Test fun resolveVersion() {

        assertEquals("55.0.2883.95", Chrome(UA_CHROME_55_ON_MAC_10_12).version)
    }
}
