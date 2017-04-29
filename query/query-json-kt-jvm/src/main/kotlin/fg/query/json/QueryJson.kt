package fg.query.json

import com.beust.klaxon.JsonArray
import com.beust.klaxon.JsonObject
import com.beust.klaxon.Parser
import fg.query.ConstraintExpr
import fg.query.Query
import fg.query.QueryResult
import java.io.File
import java.io.StringReader

class QueryJson(val query: Query) {

    fun query(jsonFile: File): QueryResult<JsonObject> {
        val jsonString = jsonFile.readText()
        return query(jsonString)
    }

    fun query(jsonString: String): QueryResult<JsonObject> {
        val json = Parser().parse(StringReader(jsonString)) as JsonArray<JsonObject>
        return query(json)
    }

    fun query(array: JsonArray<JsonObject>): QueryResult<JsonObject> {

        val startTime = System.currentTimeMillis()
        var hits = 0
        val resultList: MutableList<JsonObject> = arrayListOf()

        for (i in 0..array.lastIndex) {
            val json = array[i]
            if (matches(json, query.constraint)) {
                hits++
                resultList.add(json)
            }
        }

        val executionTimeInMillis = (System.currentTimeMillis() - startTime).toInt()
        return QueryResult(
                page = query.page,
                hits = hits,
                list = resultList,
                executionTimeInMillis = executionTimeInMillis)
    }

    private fun matches(json: JsonObject, constraint: ConstraintExpr?): Boolean {

        if (constraint == null) {
            return true
        } else {
            return constraint.matches(json)
        }
    }


}

