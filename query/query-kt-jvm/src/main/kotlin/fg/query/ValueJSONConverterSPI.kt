package fg.query

object ValueJSONConverterSPI {

    var converter: ((Any) -> Any)? = null
}