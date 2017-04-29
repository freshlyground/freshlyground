package fg.query.json

import com.beust.klaxon.JsonObject
import fg.query.*

class CompareMatcher(val compare: Compare) {

    fun match(json: JsonObject): Boolean {

        val value = json[compare.field.name]

        when (compare.operator) {
            CompareOperator.EQ -> {
                return value == compare.value
            }
            CompareOperator.NEQ -> {
                return value != compare.value
            }
            CompareOperator.LIKE -> {
                if (value == null && compare.value.obj == null) return true
                if (value == null || compare.value.obj == null) return false
                val valueAsString = value.toString()
                val compareValueAsString = compare.value.obj.toString()
                if (compareValueAsString.startsWith("%") && compareValueAsString.endsWith("%")) {
                    return valueAsString.contains(compareValueAsString.substring(1, compareValueAsString.length - 2))
                } else if (compareValueAsString.startsWith("%")) {
                    return valueAsString.startsWith(compareValueAsString.substring(1))
                } else if (compareValueAsString.endsWith("%")) {
                    return valueAsString.endsWith(compareValueAsString.substringBeforeLast("%"))
                }
            }
            CompareOperator.NOT_LIKE -> {
                if (value == null && compare.value.obj == null) return false
                if (value == null || compare.value.obj == null) return true
                val valueAsString = value.toString()
                // TODO: See above
                return !compare.value.obj.toString().contains(valueAsString)
            }
            CompareOperator.GT -> {
                if (value == null) return false
                if (compare.value.obj != null) return true
                val valueAsString = value.toString()
                return compare.value.obj.toString() < valueAsString
            }
            CompareOperator.GTE -> {
                if (value == null) return false
                if (compare.value.obj != null) return true
                val valueAsString = value.toString()
                return compare.value.obj.toString() <= valueAsString
            }
        }


        return true
    }

}

class LogicalMatcher(val logical: Logical) {

    fun match(json: JsonObject): Boolean {
        when (logical.operator) {
            LogicalOperator.AND -> {
                return logical.left.matches(json) && logical.right.matches(json)
            }
            LogicalOperator.OR -> {
                return logical.left.matches(json) || logical.right.matches(json)
            }
        }
    }

}

fun ConstraintExpr.matches(json: JsonObject): Boolean {

    if (this is Compare) {
        return CompareMatcher(this).match(json)
    } else if (this is Logical) {
        return LogicalMatcher(this).match(json)
    } else {
        throw UnsupportedOperationException("matching this type of constraint is not supported: ${this::class.simpleName}")
    }
}