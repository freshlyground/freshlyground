package fg.query

import com.beust.klaxon.JsonArray
import com.beust.klaxon.JsonObject
import com.beust.klaxon.json


fun Field.toJson(): JsonObject {
    return json {
        obj(Field::name.name to name)
    }
}

fun JsonObject.toField(): Field {
    return Field(this[Field::name.name] as String)
}

fun Order.toJson(): JsonObject {
    if (this is FieldOrder) {
        return this.toJson()
    } else {
        throw UnsupportedOperationException("toJson not support for class ${this::class.simpleName}")
    }
}

fun FieldOrder.toJson(): JsonObject {
    val typeWrapper: JsonObject = json {
        obj(FieldOrder::class.simpleName!! to obj(
                FieldOrder::field.name to field.toJson(),
                FieldOrder::direction.name to direction.name
        ))
    }
    return typeWrapper
}

fun Query.toJson(): JsonObject {

    val list: MutableList<JsonObject> = arrayListOf()
    orderList.mapTo(list) { it.toJson() }

    return json {
        obj(
                Query::constraint.name to constraint?.toJson(),
                Query::orderList.name to list.toTypedArray()
        )
    }
}

fun ConstraintExpr.toJson(): JsonObject {

    if (this is Compare) {
        return this.toJson()
    } else if (this is Logical) {
        return this.toJson()
    } else {
        throw UnsupportedOperationException("toJson not support for class ${this::class.simpleName}")
    }
}

fun JsonObject.toConstraint(): ConstraintExpr {

    if (this[Compare::class.simpleName] != null) {
        return (this[Compare::class.simpleName] as JsonObject).toCompare()
    } else if (this[Logical::class.simpleName] != null) {
        return (this[Logical::class.simpleName] as JsonObject).toLogical()
    } else {
        throw UnsupportedOperationException("toConstraint not supported for: $this")
    }
}

fun Logical.toJson(): JsonObject {
    return json {
        obj(
                Logical::class.simpleName!! to obj(
                        Logical::left.name to left.toJson(),
                        Logical::operator.name to operator.name,
                        Logical::left.name to right.toJson()
                ))
    }
}

fun JsonObject.toLogical(): Logical {
    val left = (this[Logical::left.name] as JsonObject).toConstraint()
    val operator = LogicalOperator.valueOf(this[Logical::operator.name] as String)
    val right = (this[Logical::right.name] as JsonObject).toConstraint()
    return Logical(left = left,
            operator = operator,
            right = right)
}


fun Compare.toJson(): JsonObject {

    return json {
        obj(
                Compare::class.simpleName!! to obj(
                        Compare::field.name to field.toJson(),
                        Compare::operator.name to operator.name,
                        if (operator.multiple) {

                            if (ValueJSONConverterSPI.converter != null) {
                                val values: List<Any?> = values.
                                        filter { it.obj != null }.
                                        map { it.obj!! }.
                                        map { ValueJSONConverterSPI.converter!!(it) }
                                Compare::values.name to values
                            } else {
                                val values: List<Any> = values.
                                        filter { it.obj != null }.
                                        map { it.obj!! }
                                Compare::values.name to values
                            }

                        } else {

                            if (value.obj != null) {
                                Compare::values.name to if (ValueJSONConverterSPI.converter != null) {
                                    Compare::values.name to ValueJSONConverterSPI.converter!!(value.obj!!)
                                } else {
                                    value.obj
                                }
                            } else {
                                Compare::values.name to null
                            }
                        }
                ))
    }
}

fun JsonObject.toCompare(): Compare {

    val left: Field = (this[Compare::field.name] as JsonObject).toField()
    val operator: CompareOperator = CompareOperator.valueOf(this[Compare::operator.name] as String)
    val values: MutableList<Value> = arrayListOf()
    (this[Compare::values.name] as Array<Any>).mapTo(values, { Value(it) })
    val compareBuilder = Compare.Builder()
    compareBuilder._field = left
    compareBuilder._operator = operator
    compareBuilder._values = values
    return Compare(compareBuilder)
}

fun Page.toJson(): JsonObject {
    return json {
        obj(
                Page::number.name to number,
                Page::size.name to size
        )
    }
}

fun JsonObject.toPage(): Page {
    val fromIndex = this[Page::number.name] as Int
    val maxSize = this[Page::size.name] as Int
    return Page(number = fromIndex, size = maxSize)
}


fun JsonObject.toQuery(): Query {
    val constraint = (this[Query::constraint.name] as JsonObject?)?.toConstraint()
    val page = (this[Query::page.name] as JsonObject?)?.toPage() ?: Page.ALL
    return Query(constraint = constraint,
            orderList = arrayListOf(),
            page = page)
}

fun QueryResult<*>.toJson(): JsonObject {

    return json {
        obj(
                QueryResult<*>::hits.name to hits,
                QueryResult<*>::list.name to JsonArray(list),
                QueryResult<*>::page.name to page.toJson(),
                QueryResult<*>::executionTimeInMillis.name to executionTimeInMillis

        )
    }
}
