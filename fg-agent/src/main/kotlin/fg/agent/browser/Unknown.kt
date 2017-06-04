package fg.agent.browser


class Unknown(userAgent: String) : Browser {

    override val userAgent: String = userAgent

    override val name: String = "Unknown"

    override val version: String? = null


}