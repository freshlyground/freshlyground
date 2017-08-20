package fg.agent.browser

import kotlin.test.Test
import kotlin.test.assertEquals

class InternetExplorerTest {

    @Test fun IE_11_ON_WINDOWS_8_1() {

        assertEquals("11.0", InternetExplorer(UA_IE_11_ON_WINDOWS_8_1).version)
    }

    @Test fun IE_10_ON_WINDOWS_8() {

        assertEquals("10.0", InternetExplorer(UA_IE_10_ON_WINDOWS_8).version)
    }

    @Test fun IE_9_ON_WINDOWS_7() {

        assertEquals("9.0", InternetExplorer(UA_IE_9_ON_WINDOWS_7).version)
    }
}
