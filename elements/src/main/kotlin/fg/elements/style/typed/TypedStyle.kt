package fg.elements.style.typed

import fg.elements.Dimension
import fg.elements.Element
import fg.elements.toDimension
import fg.style.camelsToDashes
import fg.style.colour.RgbColor
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

class TypedStyle(element: Element) {

    private val element: Element = element

    var display: Display? by DisplayDelegate()
    var position: Position? by PositionDelegate()
    var color: RgbColor? by RgbColorDelegate()
    var backgroundColor: RgbColor? by RgbColorDelegate()

    var left: Dimension? by DimensionDelegate()
    var right: Dimension? by DimensionDelegate()
    var top: Dimension? by DimensionDelegate()
    var bottom: Dimension? by DimensionDelegate()
    var width: Dimension? by DimensionDelegate()
    var height: Dimension? by DimensionDelegate()
    var minWidth: Dimension? by DimensionDelegate("min-width")
    var minHeight: Dimension? by DimensionDelegate("min-height")
    var maxWidth: Dimension? by DimensionDelegate("max-width")
    var maxHeight: Dimension? by DimensionDelegate("max-height")
    var paddingLeft: Dimension? by DimensionDelegate()
    var paddingRight: Dimension? by DimensionDelegate()
    var paddingTop: Dimension? by DimensionDelegate()
    var paddingBottom: Dimension? by DimensionDelegate()

    var flexDirection: FlexDirection? by FlexDirectionDelegate()
    var justifyContent: JustifyContent? by JustifyContentDelegate()
    var flex: Flex? by FlexDelegate()
    var flexGrow: FlexGrow? by FlexGrowDelegate()
    var flexShrink: FlexShrink? by FlexShrinkDelegate()
    var flexBasis: FlexBasis? by FlexBasisDelegate()
    var order: Int? by IntDelegate()

    class DisplayDelegate() :
            TypedPropertyDelegate<Display>(getFn = String::toDisplay)

    class PositionDelegate() :
            TypedPropertyDelegate<Position>(getFn = String::toPosition)

    class RgbColorDelegate(attributeName: String? = null) :
            TypedPropertyDelegate<RgbColor>(attributeName, { RgbColor.from(it) })

    class IntDelegate(attributeName: String? = null) :
            TypedPropertyDelegate<Int>(attributeName, { parseInt(it) })

    class DimensionDelegate(attributeName: String? = null) :
            TypedPropertyDelegate<Dimension>(attributeName, { it -> it.toDimension()!! })

    class FlexDirectionDelegate() :
            TypedPropertyDelegate<FlexDirection>(getFn = String::toFlexDirection)

    class JustifyContentDelegate() :
            TypedPropertyDelegate<JustifyContent>(getFn = String::toJustifyContent)

    class FlexDelegate() :
            TypedPropertyDelegate<Flex>(getFn = String::toFlex)

    class FlexGrowDelegate() :
            TypedPropertyDelegate<FlexGrow>(getFn = String::toFlexGrow)

    class FlexShrinkDelegate() :
            TypedPropertyDelegate<FlexShrink>(getFn = String::toFlexShrink)

    class FlexBasisDelegate() :
            TypedPropertyDelegate<FlexBasis>(getFn = String::toFlexBasis)

    abstract class TypedPropertyDelegate<T : Any>(val attributeName: String? = null,
                                                  val getFn: (String) -> T) : ReadWriteProperty<TypedStyle, T?> {

        override operator fun getValue(thisRef: TypedStyle, property: KProperty<*>): T? {

            val attributeName = attributeName ?: property.name.camelsToDashes()

            val stringValue = thisRef.element.w3cElement.style.getPropertyValue(attributeName)
            return if (stringValue.isNotEmpty()) getFn(stringValue) else null
        }

        override operator fun setValue(thisRef: TypedStyle, property: KProperty<*>, value: T?) {

            val attributeName = attributeName ?: property.name.camelsToDashes()

            if (value != null) {
                val valueAsString = value.toString()
                thisRef.element.w3cElement.style.setProperty(attributeName, valueAsString)
            } else {
                thisRef.element.w3cElement.style.removeProperty(attributeName)
            }
        }
    }
}




