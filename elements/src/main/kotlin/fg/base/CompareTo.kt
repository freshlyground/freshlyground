package fg.base

object CompareTo {

    fun nullSafe(obj1: Any?, obj2: Any?): Int {
        if (obj1 != null && obj2 != null) {
            if (obj1 is Comparable<*> && obj2 is Comparable<*>) {
                obj1 as Comparable<Any>
                return obj1.compareTo(obj2)
            } else {
                return obj1.toString().compareTo(obj2.toString())
            }

        } else if (obj1 == null && obj2 != null) {
            return -1
        } else {
            return 1
        }
    }

    fun nullSafe(obj1: String?, obj2: String?): Int {
        if (obj1 != null && obj2 != null) {
            return obj1.compareTo(obj2)
        } else if (obj1 == null && obj2 != null) {
            return -1
        } else {
            return 1
        }
    }

    fun nullSafe(obj1: Int?, obj2: Int?): Int {
        if (obj1 != null && obj2 != null) {
            return obj1.compareTo(obj2)
        } else if (obj1 == null && obj2 != null) {
            return -1
        } else {
            return 1
        }
    }

    fun nullSafe(obj1: Double?, obj2: Double?): Int {
        if (obj1 != null && obj2 != null) {
            return obj1.compareTo(obj2)
        } else if (obj1 == null && obj2 != null) {
            return -1
        } else {
            return 1
        }
    }
}