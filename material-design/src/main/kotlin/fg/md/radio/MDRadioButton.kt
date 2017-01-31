package fg.md.radio

import fg.beans.icon.FontAwesomeIcons
import fg.beans.icon.IconProvider
import fg.beans.radio.LabelledRadioButton
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.toClassSelector
import fg.md.Context
import fg.md.support.Ripple
import fg.style.ClassRule

class MDRadioButton(checked: Boolean = false, labelText: String? = null) :
        LabelledRadioButton(checked, labelText) {

    private val ripple: Ripple by lazy {
        Ripple(element = this.iconI,
                startedCallback = {

                },
                doneCallback = {

                })
    }

    override fun render() {
        super.render()

        addClass(classSelector)
        super.checkedIcon = MDRadioButton.checkedIcon
        super.unCheckedIcon = MDRadioButton.unCheckedIcon
    }


    override fun didMount() {
        super.didMount()

        //ripple.init()
    }

    companion object MDRadioButton : StyledClass {

        override val classSelector = "md-radio-button".toClassSelector()

        private val checkedIcon: IconProvider = FontAwesomeIcons.dot_circle_o()
        private val unCheckedIcon: IconProvider = FontAwesomeIcons.circle_o()

        override val rule: ClassRule.() -> Unit = {

            fontFamily = Context.theme.font

        }

        init {
            HTML.registerStyle(this)
        }

    }
}