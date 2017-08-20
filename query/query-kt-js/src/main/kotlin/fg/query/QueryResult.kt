package fg.query

data class QueryResult<out T>(val page: Page = Page(),
                              val hits: Int,
                              val list: List<T>,
                              val executionTimeInMillis: Int?)