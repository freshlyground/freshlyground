package fg.query


class FieldOrder(val field: Field,
                 direction: OrderDirection) :
        Order(direction = direction) {

    override fun toString(): String {
        return "FieldOrder(field=$field, direction=$direction)"
    }

}