package fg.beans.link

import fg.beans.icon.Icon

abstract class Link<in T> internal constructor(val display: String,
                                               val icon: Icon?) : Comparable<T>