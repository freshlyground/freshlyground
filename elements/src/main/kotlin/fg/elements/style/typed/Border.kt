package fg.elements.style.typed

import fg.elements.Dimension
import fg.elements.Element
import fg.elements.toDimension
import fg.style.colour.RgbColor

class Border(width: Dimension? = null, style: BorderStyle? = null, color: RgbColor? = null) {

    var width: Dimension? = width

    var style: BorderStyle? = style

    var color: RgbColor? = color

    companion object {

        fun from(element: Element): Border {

            val widthAsString = element.w3cElement.style.getPropertyValue("border-width")
            val width = if (widthAsString.isNotBlank()) widthAsString.toDimension() else null
            val styleAsString = element.w3cElement.style.getPropertyValue("border-style")
            val style = if (styleAsString.isNotBlank()) BorderStyle.valueOf(styleAsString) else null
            val colorAsString = element.w3cElement.style.getPropertyValue("border-color")
            val color = if (colorAsString.isNotBlank()) RgbColor.from(colorAsString) else null
            return Border(width = width, style = style, color = color)
        }
    }

    fun set(element: Element) {

        if (width != null) {
            val borderWidth = width?.toHtml() ?: ""
            element.w3cElement.style.setProperty("border-width", borderWidth)
        } else {
            element.w3cElement.style.removeProperty("border-width")
        }
        if (style != null) {
            val styleName = style?.name ?: ""
            element.w3cElement.style.setProperty("border-style", styleName)
        } else {
            element.w3cElement.style.removeProperty("border-style")
        }
        if (color != null) {
            val color = color?.toString() ?: ""
            element.w3cElement.style.setProperty("border-color", color)
        } else {
            element.w3cElement.style.removeProperty("border-color")
        }
    }
}