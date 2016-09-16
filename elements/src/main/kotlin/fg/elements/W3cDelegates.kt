package fg.elements

import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty

object W3cDelegates {

    fun attribute(receiver: Element, initialValue: String, attributeName: String) =
            Attribute(receiver, initialValue, attributeName)

    fun nullableAttribute(attributeName: String) = NullableAttribute(attributeName)
    fun nullableBooleanAttribute(attributeName: String) = NullableBooleanAttribute(attributeName)
    fun nullableDimensionAttribute(attributeName: String) = NullableDimensionAttribute(attributeName)

    class Attribute(receiver: Element, initialValue: String, val attributeName: String) : ReadWriteProperty<Element, String> {

        init {
            receiver.w3cElement.setAttribute(attributeName, initialValue)
        }

        override operator fun getValue(thisRef: Element, property: KProperty<*>): String {
            val w3cElement = thisRef.w3cElement
            val attributeName = attributeName
            return w3cElement.getAttribute(attributeName)!!
        }

        override operator fun setValue(thisRef: Element, property: KProperty<*>, value: String) {
            val w3cElement = thisRef.w3cElement
            val attributeName = attributeName
            w3cElement.setAttribute(attributeName, value)
        }
    }

    class NullableAttribute(val attributeName: String? = null) : ReadWriteProperty<Element, String?> {

        override operator fun getValue(thisRef: Element, property: KProperty<*>): String? {
            val w3cElement = thisRef.w3cElement
            val attributeName = attributeName ?: property.name
            return w3cElement.getAttribute(attributeName)
        }

        override operator fun setValue(thisRef: Element, property: KProperty<*>, value: String?) {
            val w3cElement = thisRef.w3cElement
            val attributeName = attributeName ?: property.name

            if (value != null) {
                w3cElement.setAttribute(attributeName, value)
            } else {
                if (w3cElement.hasAttribute(attributeName)) {
                    w3cElement.removeAttribute(attributeName)
                }
            }
        }
    }

    class NullableBooleanAttribute(val attributeName: String? = null) : ReadWriteProperty<Element, Boolean?> {

        override operator fun getValue(thisRef: Element, property: KProperty<*>): Boolean? {
            val w3cElement = thisRef.w3cElement
            val attributeName = attributeName ?: property.name
            return w3cElement.getAttribute(attributeName).isNullOrEmpty().not()
        }

        override operator fun setValue(thisRef: Element, property: KProperty<*>, value: Boolean?) {
            val w3cElement = thisRef.w3cElement
            val attributeName = attributeName ?: property.name

            if (value != null) {
                w3cElement.setAttribute(attributeName, attributeName)
            } else {
                if (w3cElement.hasAttribute(attributeName)) {
                    w3cElement.removeAttribute(attributeName)
                }
            }
        }
    }

    class NullableDimensionAttribute(val attributeName: String? = null) : ReadWriteProperty<Element, Dimension?> {

        override operator fun getValue(thisRef: Element, property: KProperty<*>): Dimension? {
            val w3cElement = thisRef.w3cElement
            val attributeName = attributeName ?: property.name
            return w3cElement.getAttribute(attributeName).toDimension()
        }

        override operator fun setValue(thisRef: Element, property: KProperty<*>, value: Dimension?) {
            val w3cElement = thisRef.w3cElement
            val attributeName = attributeName ?: property.name

            if (value != null) {
                w3cElement.setAttribute(attributeName, value.toHtml())
            } else {
                if (w3cElement.hasAttribute(attributeName)) {
                    w3cElement.removeAttribute(attributeName)
                }
            }
        }
    }
}

