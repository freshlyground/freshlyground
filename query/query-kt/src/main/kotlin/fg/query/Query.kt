package fg.query


data class Query(val constraint: ConstraintExpr? = null,
                 val orderList: List<Order> = listOf(),
                 val page: Page = Page.ALL) {


    class Builder {
        var constraint: ConstraintExpr? = null
        var orderList: MutableList<Order>? = null
    }
}
