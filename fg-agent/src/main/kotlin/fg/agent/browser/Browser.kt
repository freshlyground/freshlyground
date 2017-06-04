package fg.agent.browser

interface Browser {

    val userAgent: String

    val name: String

    val version: String?

}