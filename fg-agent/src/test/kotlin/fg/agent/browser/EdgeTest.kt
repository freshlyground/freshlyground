package fg.agent.browser

import kotlin.test.Test
import kotlin.test.assertEquals

class EdgeTest {

    @Test
    fun resolveVersion() {

        assertEquals("12.0", Edge(UA_EDGE_12_ON_WINDOWS_10).version)
    }
}
