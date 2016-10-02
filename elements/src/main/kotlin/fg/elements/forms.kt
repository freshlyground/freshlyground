package fg.elements

import org.w3c.dom.HTMLInputElement

open class Button() : Element(name = "button") {
    var _autofocus: String? by W3cDelegates.nullableAttribute("autocomplete")
    var _disabled: Boolean? by W3cDelegates.nullableBooleanAttribute("disabled")
    var _form: String? by W3cDelegates.nullableAttribute("form")
    var _formaction: String? by W3cDelegates.nullableAttribute("formaction")
    var _formenctype: String? by W3cDelegates.nullableAttribute("formenctype")
    var _formmethod: String? by W3cDelegates.nullableAttribute("formmethod")
    var _formnovalidate: String? by W3cDelegates.nullableAttribute("formnovalidate")
    var _formtarget: String? by W3cDelegates.nullableAttribute("formtarget")
    var _menu: String? by W3cDelegates.nullableAttribute("menu")
    var _name: String? by W3cDelegates.nullableAttribute("name")
    var _type: String? by W3cDelegates.nullableAttribute("type")
    var _value: String? by W3cDelegates.nullableAttribute("value")
}

/**
 * https://www.w3.org/TR/html5/forms.html#the-input-element
 */
abstract class Input(type: Type) : Element(name = "input") {

    val _inputElement: HTMLInputElement
        get() = super.w3cElement as HTMLInputElement

    var value: String? by W3cDelegates.nullableAttribute("value")

    @Suppress("LeakingThis")
    val _type: String by W3cDelegates.attribute(this, type.name, "type")

    var _accept: String? by W3cDelegates.nullableAttribute("accept")
    var _alt: String? by W3cDelegates.nullableAttribute("alt")
    var _autocomplete: String? by W3cDelegates.nullableAttribute("autocomplete")
    var _autofocus: String? by W3cDelegates.nullableAttribute("autocomplete")
    var _checked: Boolean? by W3cDelegates.nullableBooleanAttribute("checked")
    var _dirname: String? by W3cDelegates.nullableAttribute("dirname")
    var _disabled: Boolean? by W3cDelegates.nullableBooleanAttribute("disabled")
    var _form: String? by W3cDelegates.nullableAttribute("form")
    var _formaction: String? by W3cDelegates.nullableAttribute("formaction")
    var _formenctype: String? by W3cDelegates.nullableAttribute("formenctype")
    var _formmethod: String? by W3cDelegates.nullableAttribute("formmethod")
    var _formnovalidate: String? by W3cDelegates.nullableAttribute("formnovalidate")
    var _formtarget: String? by W3cDelegates.nullableAttribute("formtarget")
    var _height: Dimension? by W3cDelegates.nullableDimensionAttribute("height")
    var _inputmode: String? by W3cDelegates.nullableAttribute("inputmode")
    var _list: String? by W3cDelegates.nullableAttribute("list")
    var _max: String? by W3cDelegates.nullableAttribute("max")
    var _maxlength: String? by W3cDelegates.nullableAttribute("maxlength")
    var _min: String? by W3cDelegates.nullableAttribute("min")
    var _minlength: String? by W3cDelegates.nullableAttribute("minlength")
    var _multiple: Boolean? by W3cDelegates.nullableBooleanAttribute("multiple")
    var _name: String? by W3cDelegates.nullableAttribute("name")
    var _pattern: String? by W3cDelegates.nullableAttribute("pattern")
    var _placeholder: String? by W3cDelegates.nullableAttribute("placeholder")
    var _readonly: Boolean? by W3cDelegates.nullableBooleanAttribute("readonly")
    var _required: Boolean? by W3cDelegates.nullableBooleanAttribute("required")
    var _size: String? by W3cDelegates.nullableAttribute("size")
    var _src: String? by W3cDelegates.nullableAttribute("src")
    var _step: String? by W3cDelegates.nullableAttribute("step")
    var _width: Dimension? by W3cDelegates.nullableDimensionAttribute("width")


    enum class Type {
        hidden,
        text,
        number,
        radio
    }
}

open class InputText() : Input(Input.Type.text)
open class InputRadio() : Input(Input.Type.radio)

open class InputNumber() : Input(Input.Type.number) {

    var doubleValue: Double?
        get() {
            if (super.value == null) {
                return null
            } else {
                return safeParseDouble(super.value!!)
            }
        }
        set(value) {
            super.value = value.toString()
        }

    var intValue: Int?
        get() {
            if (super.value == null) {
                return null
            } else {
                return safeParseInt(super.value!!)
            }
        }
        set(value) {
            super.value = value.toString()
        }
}

open class Label(labelFor: String? = null) : Element(name = "label") {

    var _for: String? by W3cDelegates.nullableAttribute("for")

    init {
        _for = labelFor
    }

    override fun render() {
        super.render()

    }
}