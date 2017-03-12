package fg.style

import fg.elements.Dimension
import fg.elements.Selector
import fg.elements.style.typed.AlignItems
import fg.elements.style.typed.Display
import fg.elements.style.typed.Flex
import fg.elements.style.typed.FlexBasis
import fg.elements.style.typed.FlexDirection
import fg.elements.style.typed.FlexGrow
import fg.elements.style.typed.FlexShrink
import fg.elements.style.typed.JustifyContent
import fg.elements.style.typed.Position
import fg.elements.style.typed.toAlignItems
import fg.elements.style.typed.toDisplay
import fg.elements.style.typed.toFlex
import fg.elements.style.typed.toFlexBasis
import fg.elements.style.typed.toFlexDirection
import fg.elements.style.typed.toFlexGrow
import fg.elements.style.typed.toFlexShrink
import fg.elements.style.typed.toJustifyContent
import fg.elements.style.typed.toPosition
import fg.elements.toDimension
import fg.style.colour.RgbColor
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

abstract class TypedRule<out SELECTOR : Selector>(selector: SELECTOR) : Rule<SELECTOR>(selector) {

    var display: Display? by DisplayDelegate()
    var flexDirection: FlexDirection? by FlexDirectionDelegate()
    var alignItems: AlignItems? by AlignItemsDelegate()
    var backgroundColor: RgbColor? by RgbColorDelegate()
    var height: Dimension? by DimensionDelegate()
    var width: Dimension? by DimensionDelegate()

    class DisplayDelegate :
            TypedPropertyDelegate<Display>(getFn = String::toDisplay)

    class PositionDelegate :
            TypedPropertyDelegate<Position>(getFn = String::toPosition)

    class RgbColorDelegate(attributeName: String? = null) :
            TypedPropertyDelegate<RgbColor>(attributeName, { RgbColor.from(it) })

    class IntDelegate(attributeName: String? = null) :
            TypedPropertyDelegate<Int>(attributeName, String::toInt)

    class DimensionDelegate(attributeName: String? = null) :
            TypedPropertyDelegate<Dimension>(attributeName, { it -> it.toDimension()!! })

    class FlexDirectionDelegate :
            TypedPropertyDelegate<FlexDirection>(getFn = String::toFlexDirection)

    class AlignItemsDelegate :
            TypedPropertyDelegate<AlignItems>(getFn = String::toAlignItems)

    class JustifyContentDelegate :
            TypedPropertyDelegate<JustifyContent>(getFn = String::toJustifyContent)

    class FlexDelegate :
            TypedPropertyDelegate<Flex>(getFn = String::toFlex)

    class FlexGrowDelegate :
            TypedPropertyDelegate<FlexGrow>(getFn = String::toFlexGrow)

    class FlexShrinkDelegate :
            TypedPropertyDelegate<FlexShrink>(getFn = String::toFlexShrink)

    class FlexBasisDelegate :
            TypedPropertyDelegate<FlexBasis>(getFn = String::toFlexBasis)

    abstract class TypedPropertyDelegate<T : Any>(val attributeName: String? = null,
                                                  val getFn: (String) -> T) : ReadWriteProperty<TypedRule<*>, T?> {

        override operator fun getValue(thisRef: TypedRule<*>, property: KProperty<*>): T? {

            val attributeName = attributeName ?: property.name.camelsToDashes()

            val stringValue = thisRef._map[attributeName]

            return if (stringValue != null && stringValue.isNotEmpty()) getFn(stringValue) else null
        }

        override operator fun setValue(thisRef: TypedRule<*>, property: KProperty<*>, value: T?) {

            val attributeName = attributeName ?: property.name.camelsToDashes()

            if (value != null) {
                val valueAsString = value.toString()
                thisRef._map[attributeName] = valueAsString
            } else {
                thisRef._map.remove(attributeName)
            }
        }
    }


    /**
     * _lowerCase -> lower-case
     */
    private fun resolveRuleName(prop: KProperty<*>): String {

        return prop.name.substring(1).camelsToDashes()
    }
}