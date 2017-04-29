package fg.query


data class Logical(val left: ConstraintExpr,
                   val operator: LogicalOperator,
                   val right: ConstraintExpr) : ConstraintExpr {


    override fun toString(): String {
        return "($left $operator $right)"
    }

    companion object Factory {

        fun and(left: ConstraintExpr, right: ConstraintExpr): Logical {
            return Logical(left, LogicalOperator.AND, right)
        }

        fun or(left: ConstraintExpr, right: ConstraintExpr): Logical {
            return Logical(left, LogicalOperator.OR, right)
        }

        fun of(left: ConstraintExpr, operator: LogicalOperator, right: ConstraintExpr): Logical {
            return Logical(left, operator, right)
        }
    }
}