package fg.beans.link

import fg.beans.icon.IconProvider

abstract class Link<in T> internal constructor(val display: String,
                                               val icon: IconProvider?) : Comparable<T>