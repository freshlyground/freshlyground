package fg.query

import kotlin.js.Json
import kotlin.js.json


fun Field.toJson(): Json {
    val json = json()
    json[Field::name.name] = name
    return json
}

fun Order.toJson(): Json {
    if (this is FieldOrder) {
        return this.toJson()
    } else {
        throw UnsupportedOperationException("toJson not support for class ${this::class.js}")
    }
}

fun FieldOrder.toJson(): Json {
    val typeWrapper = json()
    val json = json()
    typeWrapper[FieldOrder::class.js.name] = json
    json[FieldOrder::field.name] = field.toJson()
    json[FieldOrder::direction.name] = direction.name
    return typeWrapper
}

fun Query.toJson(): Json {
    val json = json()
    json[Query::constraint.name] = constraint?.toJson()

    val list: MutableList<Json> = arrayListOf();
    orderList.mapTo(list) { it.toJson() }
    json[Query::orderList.name] = list.toTypedArray()

    return json
}

fun ConstraintExpr.toJson(): Json {

    if (this is Compare) {
        return this.toJson()
    } else if (this is Logical) {
        return this.toJson()
    } else {
        throw UnsupportedOperationException("toJson not support for class ${this::class.js}")
    }
}

fun Logical.toJson(): Json {
    val typeWrapper = json()
    val json = json()
    typeWrapper[Logical::class.js.name] = json
    json[Logical::left.name] = left.toJson()
    json[Logical::operator.name] = operator.name
    json[Logical::left.name] = right.toJson()
    return typeWrapper
}

fun Compare.toJson(): Json {
    val typeWrapper = json()
    val json = json()
    typeWrapper[Compare::class.js.name] = json
    json[Compare::field.name] = field.toJson()
    json[Compare::operator.name] = operator.name

    if (operator.multiple) {

        if (ValueJSONConverterSPI.converter != null) {
            val values: List<Any?> = values.
                    filter { it.obj != null }.
                    map { it.obj!! }.
                    map { ValueJSONConverterSPI.converter!!(it) }
            json[Compare::values.name] = values
        } else {
            val values: List<Any> = values.
                    filter { it.obj != null }.
                    map { it.obj!! }
            json[Compare::values.name] = values
        }

    } else {

        if (value.obj != null) {
            json[Compare::values.name] = value.obj
            ValueJSONConverterSPI.converter?.run {
                json[Compare::values.name] = ValueJSONConverterSPI.converter!!(value.obj!!)
            }
        } else {
            json[Compare::values.name] = null
        }
    }

    return typeWrapper
}

fun Page.toJson(): Json {
    val json = json()
    json[Page::number.name] = number
    json[Page::size.name] = size
    return json
}

fun Json.toPage(): Page {
    val fromIndex = this[Page::number.name] as Int
    val maxSize = this[Page::size.name] as Int
    return Page(number = fromIndex, size = maxSize)
}


fun <T> Json.toQueryResult(jsonToPojo: (json: Json) -> T): QueryResult<T> {

    val page = this["page"].unsafeCast<Json>().toPage()
    val hits = this["hits"] as Int
    val executionTimeInMillis = this["executionTimeInMillis"] as Int?
    val listOfJson = this["list"] as Array<Json>
    val listOfPojo: MutableList<T> = arrayListOf()
    listOfJson.mapTo(listOfPojo, { jsonToPojo.invoke(it) })
    return QueryResult(page = page,
            hits = hits,
            list = listOfPojo,
            executionTimeInMillis = executionTimeInMillis)
}