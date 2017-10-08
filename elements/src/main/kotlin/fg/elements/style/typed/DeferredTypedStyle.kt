package fg.elements.style.typed

import fg.elements.Dimension
import fg.elements.Element
import fg.style.colour.RgbColor

class DeferredTypedStyle : TypedStyle {

    override var display: Display? = null
    override var position: Position? = null
    override var color: RgbColor? = null
    override var backgroundColor: RgbColor? = null
    override var left: Dimension? = null
    override var right: Dimension? = null
    override var top: Dimension? = null
    override var bottom: Dimension? = null
    override var width: Dimension? = null
    override var height: Dimension? = null
    override var minWidth: Dimension? = null
    override var minHeight: Dimension? = null
    override var maxWidth: Dimension? = null
    override var maxHeight: Dimension? = null
    override var marginLeft: Dimension? = null
    override var marginRight: Dimension? = null
    override var marginTop: Dimension? = null
    override var marginBottom: Dimension? = null
    override var paddingLeft: Dimension? = null
    override var paddingRight: Dimension? = null
    override var paddingTop: Dimension? = null
    override var paddingBottom: Dimension? = null
    override var border: Border? = null
    override var flexDirection: FlexDirection? = null
    override var justifyContent: JustifyContent? = null
    override var alignItems: AlignItems? = null
    override var flex: Flex? = null
    override var flexGrow: FlexGrow? = null
    override var flexShrink: FlexShrink? = null
    override var flexBasis: FlexBasis? = null
    override var order: Int? = null

    fun apply(element: Element) {
        this.display?.run { element.style.display = this }
        this.position?.run { element.style.position = this }
        this.color?.run { element.style.color = this }
        this.backgroundColor?.run { element.style.backgroundColor = this }
        this.left?.run { element.style.left = this }
        this.top?.run { element.style.top = this }
        this.bottom?.run { element.style.bottom = this }
        this.width?.run { element.style.width = this }
        this.height?.run { element.style.height = this }
        this.minWidth?.run { element.style.minWidth = this }
        this.minHeight?.run { element.style.minHeight = this }
        this.maxWidth?.run { element.style.maxWidth = this }
        this.maxHeight?.run { element.style.maxHeight = this }
        this.marginLeft?.run { element.style.marginLeft = this }
        this.marginRight?.run { element.style.marginRight = this }
        this.marginTop?.run { element.style.marginTop = this }
        this.marginBottom?.run { element.style.marginBottom = this }
        this.paddingLeft?.run { element.style.paddingLeft = this }
        this.paddingRight?.run { element.style.paddingRight = this }
        this.paddingTop?.run { element.style.paddingTop = this }
        this.paddingBottom?.run { element.style.paddingBottom = this }
        this.border?.run { element.style.border = this }
        this.flexDirection?.run { element.style.flexDirection = this }
        this.justifyContent?.run { element.style.justifyContent = this }
        this.alignItems?.run { element.style.alignItems = this }
        this.flex?.run { element.style.flex = this }
        this.flexGrow?.run { element.style.flexGrow = this }
        this.flexShrink?.run { element.style.flexShrink = this }
        this.flexBasis?.run { element.style.flexBasis = this }
        this.order?.run { element.style.order = this }
    }
}