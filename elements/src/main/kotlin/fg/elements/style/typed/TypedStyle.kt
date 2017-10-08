package fg.elements.style.typed

import fg.elements.Dimension
import fg.style.colour.RgbColor

interface TypedStyle {
    var display: Display?
    var position: Position?
    var color: RgbColor?
    var backgroundColor: RgbColor?
    var left: Dimension?
    var right: Dimension?
    var top: Dimension?
    var bottom: Dimension?
    var width: Dimension?
    var height: Dimension?
    var minWidth: Dimension?
    var minHeight: Dimension?
    var maxWidth: Dimension?
    var maxHeight: Dimension?
    var marginLeft: Dimension?
    var marginRight: Dimension?
    var marginTop: Dimension?
    var marginBottom: Dimension?
    var paddingLeft: Dimension?
    var paddingRight: Dimension?
    var paddingTop: Dimension?
    var paddingBottom: Dimension?
    var border: Border?
    var flexDirection: FlexDirection?
    var justifyContent: JustifyContent?
    var alignItems: AlignItems?
    var flex: Flex?
    var flexGrow: FlexGrow?
    var flexShrink: FlexShrink?
    var flexBasis: FlexBasis?
    var order: Int?
}