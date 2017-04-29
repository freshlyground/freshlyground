package fg.query


fun query(init: Query.Builder.() -> Unit): Query {
    val builder = Query.Builder()
    builder.init()
    return Query(
            constraint = builder.constraint,
            orderList = builder.orderList ?: listOf())
}


infix fun ConstraintExpr.or(constraint: ConstraintExpr): ConstraintExpr {
    return Logical(this, LogicalOperator.OR, constraint)
}

infix fun ConstraintExpr.and(constraint: ConstraintExpr): ConstraintExpr {
    return Logical(this, LogicalOperator.AND, constraint)
}

infix fun String.eq(value: Any): Compare {
    return doCompare(this, CompareOperator.EQ, value)
}

infix fun String.neq(value: Any): Compare {
    return doCompare(this, CompareOperator.NEQ, value)
}

infix fun String.gt(value: Any): Compare {
    return doCompare(this, CompareOperator.GT, value)
}

infix fun String.gte(value: Any): Compare {
    return doCompare(this, CompareOperator.GTE, value)
}

infix fun String.lt(value: Any): Compare {
    return doCompare(this, CompareOperator.LT, value)
}

infix fun String.lte(value: Any): Compare {
    return doCompare(this, CompareOperator.LTE, value)
}

infix fun String.like(value: Any): Compare {
    return doCompare(this, CompareOperator.LIKE, value)
}

infix fun String.notLike(value: Any): Compare {
    return doCompare(this, CompareOperator.NOT_LIKE, value)
}

infix fun String.inn(value: Any): Compare {
    return doCompare(this, CompareOperator.IN, value)
}

infix fun String.notIn(value: Any): Compare {
    return doCompare(this, CompareOperator.NOT_IN, value)
}

private fun doCompare(field: String, op: CompareOperator, value: Any): Compare {
    val builder = Compare.Builder()
    builder._field = Field(field)
    builder._operator = op
    builder._values = arrayOf(Value(value))
    return Compare(builder)
}




