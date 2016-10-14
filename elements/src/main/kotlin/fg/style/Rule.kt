package fg.style

import fg.elements.Selector
import kotlin.reflect.KProperty

abstract class Rule<out SELECTOR : Selector>(val selector: SELECTOR) {

    protected val _map: MutableMap<String, String> = mutableMapOf()

    internal val _childStyles: MutableList<Rule<*>> = arrayListOf()

    abstract fun cssText(): String

    internal fun cssText(selector: Selector): String {
        var s = ""
        s += selector.toString()
        s += " { "
        for ((key, value) in _map) {

            s += "$key: $value; "

        }
        s += "}"
        return s
    }

    var cssFloat: String by Property()

    var _dashed_attribute: String by Property()

    var _camel_cased_attribute: String by Property()

    var alignContent: String by Property()

    var alignItems: String by Property()

    var alignSelf: String by Property()

    var animation: String by Property()

    var animationDelay: String by Property()

    var animationDirection: String by Property()

    var animationDuration: String by Property()

    var animationFillMode: String by Property()

    var animationIterationCount: String by Property()

    var animationName: String by Property()

    var animationPlayState: String by Property()

    var animationTimingFunction: String by Property()

    var backfaceVisibility: String by Property()

    var background: String by Property()

    var backgroundAttachment: String by Property()

    var backgroundClip: String by Property()

    var backgroundColor: String? by NullableProperty()

    var backgroundImage: String by Property()

    var backgroundOrigin: String by Property()

    var backgroundPosition: String by Property()

    var backgroundRepeat: String by Property()

    var backgroundSize: String by Property()

    var border: String by Property()

    var borderBottom: String by Property()

    var borderBottomColor: String by Property()

    var borderBottomLeftRadius: String by Property()

    var borderBottomRightRadius: String by Property()

    var borderBottomStyle: String by Property()

    var borderBottomWidth: String by Property()

    var borderCollapse: String by Property()

    var borderColor: String? by NullableProperty()

    var borderImage: String by Property()

    var borderImageOutset: String by Property()

    var borderImageRepeat: String by Property()

    var borderImageSlice: String by Property()

    var borderImageSource: String by Property()

    var borderImageWidth: String by Property()

    var borderLeft: String by Property()

    var borderLeftColor: String by Property()

    var borderLeftStyle: String by Property()

    var borderLeftWidth: String by Property()

    var borderRadius: String? by NullableProperty()

    var borderRight: String by Property()

    var borderRightColor: String by Property()

    var borderRightStyle: String by Property()

    var borderRightWidth: String by Property()

    var borderSpacing: String by Property()

    var borderStyle: String? by NullableProperty()

    var borderTop: String by Property()

    var borderTopColor: String by Property()

    var borderTopLeftRadius: String by Property()

    var borderTopRightRadius: String by Property()

    var borderTopStyle: String by Property()

    var borderTopWidth: String by Property()

    var borderWidth: String? by NullableProperty()

    var bottom: String by Property()

    var boxDecorationBreak: String by Property()

    var boxShadow: String? by NullableProperty()

    var boxSizing: String by Property()

    var breakAfter: String by Property()

    var breakBefore: String by Property()

    var breakInside: String by Property()

    var captionSide: String by Property()

    var clear: String by Property()

    var clip: String by Property()

    var color: String by Property()

    var columnCount: String by Property()

    var columnFill: String by Property()

    var columnGap: String by Property()

    var columnRule: String by Property()

    var columnRuleColor: String by Property()

    var columnRuleStyle: String by Property()

    var columnRuleWidth: String by Property()

    var columnSpan: String by Property()

    var columnWidth: String by Property()

    var columns: String by Property()

    var content: String by Property()

    var counterIncrement: String by Property()

    var counterReset: String by Property()

    var cursor: String? by NullableProperty()

    var direction: String by Property()

    var display: String by Property()

    var emptyCells: String by Property()

    var filter: String by Property()

    var flex: String by Property()

    var flexBasis: String by Property()

    var flexDirection: String by Property()

    var flexFlow: String by Property()

    var flexGrow: String by Property()

    var flexShrink: String by Property()

    var flexWrap: String by Property()

    var font: String by Property()

    var fontFamily: String by Property()

    var fontFeatureSettings: String by Property()

    var fontKerning: String by Property()

    var fontLanguageOverride: String by Property()

    var fontSize: String by Property()

    var fontSizeAdjust: String by Property()

    var fontStretch: String by Property()

    var fontStyle: String by Property()

    var fontSynthesis: String by Property()

    var fontVariant: String by Property()

    var fontVariantAlternates: String by Property()

    var fontVariantCaps: String by Property()

    var fontVariantEastAsian: String by Property()

    var fontVariantLigatures: String by Property()

    var fontVariantNumeric: String by Property()

    var fontVariantPosition: String by Property()

    var fontWeight: String by Property()

    var hangingPunctuation: String by Property()

    var height: String by Property()

    var hyphens: String by Property()

    var imageOrientation: String by Property()

    var imageRendering: String by Property()

    var imageResolution: String by Property()

    var imeMode: String by Property()

    var justifyContent: String by Property()

    var left: String by Property()

    var letterSpacing: String by Property()

    var lineBreak: String by Property()

    var lineHeight: String by Property()

    var listStyle: String by Property()

    var listStyleImage: String by Property()

    var listStylePosition: String by Property()

    var listStyleType: String by Property()

    var margin: String? by NullableProperty()

    var marginBottom: String by Property()

    var marginLeft: String by Property()

    var marginRight: String by Property()

    var marginTop: String by Property()

    var mark: String by Property()

    var markAfter: String by Property()

    var markBefore: String by Property()

    var marks: String by Property()

    var marqueeDirection: String by Property()

    var marqueePlayCount: String by Property()

    var marqueeSpeed: String by Property()

    var marqueeStyle: String by Property()

    var mask: String by Property()

    var maskType: String by Property()

    var maxHeight: String by Property()

    var maxWidth: String by Property()

    var minHeight: String by Property()

    var minWidth: String by Property()

    var navDown: String by Property()

    var navIndex: String by Property()

    var navLeft: String by Property()

    var navRight: String by Property()

    var navUp: String by Property()

    var objectFit: String by Property()

    var objectPosition: String by Property()

    var opacity: String by Property()

    var order: String by Property()

    var orphans: String by Property()

    var outline: String? by NullableProperty()

    var outlineColor: String by Property()

    var outlineOffset: String by Property()

    var outlineStyle: String by Property()

    var outlineWidth: String by Property()

    var overflowWrap: String by Property()

    var overflowX: String by Property()

    var overflowY: String by Property()

    var padding: String by Property()

    var paddingBottom: String by Property()

    var paddingLeft: String by Property()

    var paddingRight: String by Property()

    var paddingTop: String by Property()

    var pageBreakAfter: String by Property()

    var pageBreakBefore: String by Property()

    var pageBreakInside: String by Property()

    var perspective: String by Property()

    var perspectiveOrigin: String by Property()

    var phonemes: String by Property()

    var position: String by Property()

    var quotes: String by Property()

    var resize: String by Property()

    var rest: String by Property()

    var restAfter: String by Property()

    var restBefore: String by Property()

    var right: String by Property()

    var tabSize: String by Property()

    var tableLayout: String by Property()

    var textAlign: String by Property()

    var textAlignLast: String by Property()

    var textCombineUpright: String by Property()

    var textDecoration: String by Property()

    var textDecorationColor: String by Property()

    var textDecorationLine: String by Property()

    var textDecorationStyle: String by Property()

    var textIndent: String by Property()

    var textJustify: String by Property()

    var textOrientation: String by Property()

    var textOverflow: String by Property()

    var textShadow: String by Property()

    var textTransform: String by Property()

    var textUnderlinePosition: String by Property()

    var top: String by Property()

    var transform: String by Property()

    var transformOrigin: String by Property()

    var transformStyle: String by Property()

    var transition: String by Property()

    var transitionDelay: String by Property()

    var transitionDuration: String by Property()

    var transitionProperty: String by Property()

    var transitionTimingFunction: String by Property()

    var unicodeBidi: String by Property()

    var verticalAlign: String by Property()

    var visibility: String by Property()

    var voiceBalance: String by Property()

    var voiceDuration: String by Property()

    var voicePitch: String by Property()

    var voicePitchRange: String by Property()

    var voiceRate: String by Property()

    var voiceStress: String by Property()

    var voiceVolume: String by Property()

    var whiteSpace: String by Property()

    var widows: String by Property()

    var width: String by Property()

    var wordBreak: String by Property()

    var wordSpacing: String by Property()

    var wordWrap: String by Property()

    var writingMode: String by Property()

    var zIndex: String by Property()

    inner class Property(val name: String? = null) {

        operator fun getValue(rule: Rule<*>?, prop: KProperty<*>): String {
            val styleName = name ?: resolveRuleName(prop)
            return _map[styleName] ?: ""
        }

        operator fun setValue(rule: Rule<*>?, prop: KProperty<*>, value: String) {
            val styleName = name ?: resolveRuleName(prop)
            if (value.isNotEmpty()) {
                _map[styleName] = value
            } else {
                _map.remove(styleName)
            }
        }
    }

    inner class NullableProperty(val name: String? = null) {

        operator fun getValue(rule: Rule<*>?, prop: KProperty<*>): String? {
            val styleName = name ?: resolveRuleName(prop)
            return _map[styleName]
        }

        operator fun setValue(rule: Rule<*>?, prop: KProperty<*>, value: String?) {
            val styleName = name ?: resolveRuleName(prop)
            if (value != null && value.isNotEmpty()) {
                _map[styleName] = value
            } else {
                _map.remove(styleName)
            }
        }
    }

    /**
     * lowerCase -> lower-case
     */
    private fun resolveRuleName(prop: KProperty<*>): String {

        var s = ""
        for (c in prop.name) {
            if (c.toUpperCase() == c) {
                s += "-" + c.toLowerCase()
            } else {
                s += c
            }
        }
        return s
    }
}