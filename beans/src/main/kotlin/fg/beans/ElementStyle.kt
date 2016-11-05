package fg.beans

import fg.elements.Dimension
import fg.style.colour.RgbColor

open class ElementStyle {

    open var cursor: String? = null

    open var margin: String? = null

    open var backgroundColor: RgbColor? = null
    open var color: RgbColor? = null

    open var borderStyle: String? = null
    open var borderWidth: Dimension? = null
    open var borderColor: RgbColor? = null
    open var borderRadius: Dimension? = null

    open var boxShadow: String? = null

    open var outline: String? = null
}