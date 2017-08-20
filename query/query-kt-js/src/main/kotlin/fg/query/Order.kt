package fg.query


abstract class Order(val direction: OrderDirection) {

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is Order) return false

        if (direction != other.direction) return false

        return true
    }

    override fun hashCode(): Int {
        return direction.hashCode()
    }


}