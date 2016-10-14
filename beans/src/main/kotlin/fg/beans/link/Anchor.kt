package fg.beans.link

import fg.beans.icon.IconI
import fg.beans.pkg
import fg.elements.A
import fg.elements.HTML
import fg.elements.StyledClass
import fg.elements.onClick
import fg.elements.toClassSelector
import fg.style.ClassRule
import org.w3c.dom.events.Event
import kotlin.properties.Delegates

class Anchor(link: Link<*>? = null,
             target: String = "_blank",
             val useDisplay: Boolean = true) :
        A() {

    var link: Link<*>? by Delegates.observable(link) { property, old, new ->
        renderLink(new)
    }

    val iconI: IconI by lazy {
        IconI()
    }

    private val onClickHandler: (Event) -> Unit = {


    }

    init {
        _target = target
    }

    override fun render() {
        super.render()
        addClass(classSelector)
        renderLink(link)
    }

    override fun didMount() {
        super.didMount()

        this.onClick(onClickHandler)
    }

    private fun renderLink(link: Link<*>?) {

        if (link == null) {
            style.cursor = "auto"
            //this.tooltip = null
        } else {
            style.cursor = "pointer"
            when (link) {
                is ExternalLink -> {
                    this._href = link.url?.toString() ?: null

                    if (useDisplay) {
                        textContent = link.display
                        renderIcon(link)
                    }

                    /*if (enableTooltip) {
                        this.tooltip = link.tooltip
                    } else {
                        this.tooltip = null
                    }*/
                }
                is LocalLink -> {
                    this._href = link.path.toString()

                    if (useDisplay) {
                        textContent = link.display
                        renderIcon(link)
                    }

                    /*if (enableTooltip) {
                        this.tooltip = link.tooltip
                    } else {
                        this.tooltip = null
                    }*/
                }
            /*is LocalRoute -> {
                this.href = "javascript:void(0)"

                if (useDisplay) {
                    textContent = link.display
                    renderIcon(link)
                }

                if (enableTooltip) {
                    this.tooltip = link.tooltip
                } else {
                    this.tooltip = null
                }
            }*/
            }
        }
    }

    private fun renderIcon(link: Link<*>) {
        if (link.icon != null) {
            iconI.icon = link.icon
            this.appendChild(iconI)
        } else if (this.hasChild(iconI)) {
            this.removeChild(iconI)
        }
    }

    companion object Anchor : StyledClass {

        override val classSelector = "$pkg-anchor".toClassSelector()

        override val rule: ClassRule.() -> Unit = {

        }

        init {
            HTML.registerStyle(this)
        }
    }
}