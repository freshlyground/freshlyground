package fg.elements.style.typed

import fg.elements.Dimension
import fg.elements.Element
import fg.elements.toDimension
import fg.style.camelsToDashes
import fg.style.colour.RgbColor
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

class BoundedTypedStyle(element: Element) : TypedStyle {

    private val element: Element = element

    override var display: Display? by DisplayDelegate()
    override var position: Position? by PositionDelegate()
    override var color: RgbColor? by RgbColorDelegate()
    override var backgroundColor: RgbColor? by RgbColorDelegate()

    override var left: Dimension? by DimensionDelegate()
    override var right: Dimension? by DimensionDelegate()
    override var top: Dimension? by DimensionDelegate()
    override var bottom: Dimension? by DimensionDelegate()
    override var width: Dimension? by DimensionDelegate()
    override var height: Dimension? by DimensionDelegate()

    override var minWidth: Dimension? by DimensionDelegate("min-width")
    override var minHeight: Dimension? by DimensionDelegate("min-height")
    override var maxWidth: Dimension? by DimensionDelegate("max-width")
    override var maxHeight: Dimension? by DimensionDelegate("max-height")

    override var marginLeft: Dimension? by DimensionDelegate()
    override var marginRight: Dimension? by DimensionDelegate()
    override var marginTop: Dimension? by DimensionDelegate()
    override var marginBottom: Dimension? by DimensionDelegate()
    override var paddingLeft: Dimension? by DimensionDelegate()
    override var paddingRight: Dimension? by DimensionDelegate()
    override var paddingTop: Dimension? by DimensionDelegate()
    override var paddingBottom: Dimension? by DimensionDelegate()

    override var border: Border? by BorderDelegate()

    override var flexDirection: FlexDirection? by FlexDirectionDelegate()
    override var justifyContent: JustifyContent? by JustifyContentDelegate()
    override var alignItems: AlignItems? by AlignItemsDelegate()
    override var flex: Flex? by FlexDelegate()
    override var flexGrow: FlexGrow? by FlexGrowDelegate()
    override var flexShrink: FlexShrink? by FlexShrinkDelegate()
    override var flexBasis: FlexBasis? by FlexBasisDelegate()
    override var order: Int? by IntDelegate()

    class AlignItemsDelegate :
            TypedPropertyDelegate<AlignItems>(getFn = String::toAlignItems)

    class BorderDelegate : TypedPropertyDelegate2<Border>(getFn = { Border.from(it) },
            setFn = { value, element -> if (value != null) value.set(element) else Border().set(element) })

    class DisplayDelegate :
            TypedPropertyDelegate<Display>(getFn = String::toDisplay)

    class RgbColorDelegate(attributeName: String? = null) :
            TypedPropertyDelegate<RgbColor>(attributeName, { RgbColor.from(it) })

    class DimensionDelegate(attributeName: String? = null) :
            TypedPropertyDelegate<Dimension>(attributeName, { it -> it.toDimension()!! })

    class FlexDirectionDelegate :
            TypedPropertyDelegate<FlexDirection>(getFn = String::toFlexDirection)

    class FlexDelegate :
            TypedPropertyDelegate<Flex>(getFn = String::toFlex)

    class FlexGrowDelegate :
            TypedPropertyDelegate<FlexGrow>(getFn = String::toFlexGrow)

    class FlexShrinkDelegate :
            TypedPropertyDelegate<FlexShrink>(getFn = String::toFlexShrink)

    class FlexBasisDelegate :
            TypedPropertyDelegate<FlexBasis>(getFn = String::toFlexBasis)

    class IntDelegate(attributeName: String? = null) :
            TypedPropertyDelegate<Int>(attributeName, String::toInt)

    class JustifyContentDelegate :
            TypedPropertyDelegate<JustifyContent>(getFn = String::toJustifyContent)

    class PositionDelegate :
            TypedPropertyDelegate<Position>(getFn = String::toPosition)

    abstract class TypedPropertyDelegate<T : Any>(val attributeName: String? = null,
                                                  val getFn: (String) -> T) : ReadWriteProperty<BoundedTypedStyle, T?> {

        override operator fun getValue(thisRef: BoundedTypedStyle, property: KProperty<*>): T? {

            val attributeName = attributeName ?: property.name.camelsToDashes()

            val stringValue = thisRef.element.w3cElement.style.getPropertyValue(attributeName)
            return if (stringValue.isNotEmpty()) getFn(stringValue) else null
        }

        override operator fun setValue(thisRef: BoundedTypedStyle, property: KProperty<*>, value: T?) {

            val attributeName = attributeName ?: property.name.camelsToDashes()

            if (value != null) {
                val valueAsString = value.toString()
                thisRef.element.w3cElement.style.setProperty(attributeName, valueAsString)
            } else {
                thisRef.element.w3cElement.style.removeProperty(attributeName)
            }
        }
    }

    abstract class TypedPropertyDelegate2<T : Any>(val getFn: (Element) -> T,
                                                   val setFn: (T?, Element) -> Unit) : ReadWriteProperty<BoundedTypedStyle, T?> {

        override operator fun getValue(thisRef: BoundedTypedStyle, property: KProperty<*>): T? {
            return getFn(thisRef.element)
        }

        override operator fun setValue(thisRef: BoundedTypedStyle, property: KProperty<*>, value: T?) {

            return setFn(value, thisRef.element)
        }
    }
}




