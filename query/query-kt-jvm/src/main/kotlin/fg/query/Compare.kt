package fg.query

data class Compare(val field: Field,
                   val operator: CompareOperator,
                   val values: List<Value>) : ConstraintExpr {

    constructor(builder: Builder) : this(
            field = builder._field ?: throw NullPointerException("field"),
            operator = builder._operator ?: throw NullPointerException("operator"),
            values = builder._values ?: throw NullPointerException("values")
    )

    val value: Value = values[0]
    val valueList: List<Value> = values

    override fun toString(): String {

        var str = "$field ${operator.value}"
        if (operator.multiple) {

            str += "(" + valueList.joinToString(", ") + ")"
        } else {
            str += value
        }

        return str
    }


    class Builder {
        var _field: Field? = null
        var _operator: CompareOperator? = null
        var _values: List<Value>? = null
    }

    companion object {

        fun eq(field: Field, value: Value): Compare {
            return create(field, CompareOperator.EQ, value)
        }

        fun neq(field: Field, value: Value): Compare {
            return create(field, CompareOperator.NEQ, value)
        }

        fun gt(field: Field, value: Value): Compare {
            return create(field, CompareOperator.GT, value)
        }

        fun gte(field: Field, value: Value): Compare {
            return create(field, CompareOperator.GTE, value)
        }

        fun lt(field: Field, value: Value): Compare {
            return create(field, CompareOperator.LT, value)
        }

        fun lte(field: Field, value: Value): Compare {
            return create(field, CompareOperator.LTE, value)
        }

        fun like(field: Field, value: Value): Compare {
            return create(field, CompareOperator.LIKE, value)
        }

        fun notLike(field: Field, value: Value): Compare {
            return create(field, CompareOperator.NOT_LIKE, value)
        }

        fun inn(field: Field, vararg value: Value): Compare {
            return Compare(field, CompareOperator.IN, value.toList())
        }

        fun notIn(field: Field, vararg value: Value): Compare {
            return Compare(field, CompareOperator.NOT_IN, value.toList())
        }

        fun create(field: Field, operator: CompareOperator, value: Value): Compare {
            return Compare(field, operator, listOf(value))
        }

        fun create(field: Field, operator: CompareOperator, value: List<Value>): Compare {
            return Compare(field, operator, value)
        }

    }
}