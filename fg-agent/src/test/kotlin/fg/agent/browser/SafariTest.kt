package fg.agent.browser

import org.junit.Test
import kotlin.test.assertEquals

class SafariTest {

    @Test fun resolveVersion() {

        assertEquals("10.0", Safari(UA_SAFARI_10_ON_MAC_10_12).version)
    }
}
