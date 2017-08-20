package fg.query

enum class CompareOperator constructor(val value: String, val multiple: Boolean) {
    EQ("=", false),
    NEQ("!=", false),
    GT(">", false),
    GTE(">=", false),
    LT("<", false),
    LTE("<=", false),
    LIKE("LIKE", false),
    NOT_LIKE("NOT LIKE", false),
    IN("IN", true),
    NOT_IN("NOT IN", true);
}