package fg.beans.radio

import fg.beans.icon.Icon
import fg.beans.icon.IconI
import fg.elements.Div
import fg.elements.HTML
import fg.elements.Label
import fg.elements.StyledClass
import fg.elements.onClick
import fg.elements.toClassSelector
import fg.style.ClassRule
import fg.style.child
import fg.style.hover
import org.w3c.dom.events.Event
import kotlin.properties.Delegates

open class LabelledRadioButton(checked: Boolean,
                               labelText: String?,
                               checkedIcon: Icon? = null,
                               unCheckedIcon: Icon? = null) : Div() {

    val radioButton: RadioButton by lazy {
        RadioButton(checked)
    }

    var checkedIcon: Icon? by Delegates.observable(checkedIcon) { property, old, new ->
        renderChecked(radioButton.checked)
    }

    var unCheckedIcon: Icon? by Delegates.observable(unCheckedIcon) { property, old, new ->
        renderChecked(radioButton.checked)
    }

    protected val iconI: IconI by lazy {
        val el = IconI(unCheckedIcon)
        el.style.left = "-1em"
        el.style.position = "relative"
        el
    }

    val label: Label by lazy {
        val el = Label()
        el.hide()
        el
    }

    var labelText: String? by Delegates.observable(labelText) { property, old, new ->
        renderLabel(new)
    }

    override fun render() {

        addClass(classSelector)

        appendChild(radioButton)
        appendChild(iconI)
        appendChild(label)

        renderLabel(labelText)
    }

    override fun didMount() {
        super.didMount()

        label.onClick(clickHandler)
        iconI.onClick(clickHandler)
        radioButton.onChecked(checkedHandler)
    }

    private val checkedHandler: (Boolean) -> Unit = { checked ->
        renderChecked(checked)
    }

    private val clickHandler: (Event) -> Unit = {
        this.radioButton.toggle()
    }

    private fun renderLabel(labelText: String?) {
        if (labelText != null) {
            label.textContent = labelText
            label.show()
        } else {
            label.removeChildren()
            label.hide()
        }
    }

    private fun renderChecked(checked: Boolean) {

        if (this.checkedIcon != null && this.unCheckedIcon != null) {
            radioButton.style.opacity = "0"
            iconI.show()

            iconI.icon = if (checked)
                this.checkedIcon
            else
                this.unCheckedIcon
        } else {
            radioButton.style.opacity = ""
            iconI.hide()
        }
    }


    companion object LabelledRadioButton : StyledClass {

        override val classSelector = "bn-labelled-radio-button".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

            hover {
                cursor = "pointer"
            }

            child("label") {
                hover {
                    cursor = "pointer"
                }
            }

        }

        init {
            HTML.registerStyle(this)
        }

    }

}