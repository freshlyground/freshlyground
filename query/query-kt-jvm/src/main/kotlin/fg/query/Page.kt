package fg.query

/**
 * To get all, set number to 0 and maxSize to -1.
 */
data class Page(val number: Int = 1,
                val size: Int = -1) {

    companion object Factory {

        val ALL = Page(number = 1, size = -1)
    }
}