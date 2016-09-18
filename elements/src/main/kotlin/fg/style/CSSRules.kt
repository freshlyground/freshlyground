package fg.style


class CSSRules {

    private val rules: MutableList<ClassRule> = arrayListOf()

    fun add(rule: ClassRule) {
        rules.add(rule)
    }

    fun provide(): List<ClassRule> {
        return rules
    }
}