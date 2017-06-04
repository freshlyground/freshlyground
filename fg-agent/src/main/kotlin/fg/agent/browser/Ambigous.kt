package fg.agent.browser


class Ambigous(userAgent: String, matches: List<Browser>) : Browser {

    override val userAgent: String = userAgent

    override val name: String = "Ambigous"

    override val version: String? = matches.map { it.name }.reduce { a, b -> "$a, $b" }


}