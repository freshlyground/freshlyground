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

    var _cssFloat: String by Property()

    var _dashed_attribute: String by Property()

    var _camel_cased_attribute: String by Property()

    var _alignContent: String by Property()

    var _alignItems: String by Property()

    var _alignSelf: String by Property()

    var _animation: String by Property()

    var _animationDelay: String by Property()

    var _animationDirection: String by Property()

    var _animationDuration: String by Property()

    var _animationFillMode: String by Property()

    var _animationIterationCount: String by Property()

    var _animationName: String by Property()

    var _animationPlayState: String by Property()

    var _animationTimingFunction: String by Property()

    var _backfaceVisibility: String by Property()

    var _background: String by Property()

    var _backgroundAttachment: String by Property()

    var _backgroundClip: String by Property()

    var _backgroundColor: String? by NullableProperty()

    var _backgroundImage: String by Property()

    var _backgroundOrigin: String by Property()

    var _backgroundPosition: String by Property()

    var _backgroundRepeat: String by Property()

    var _backgroundSize: String by Property()

    var _border: String by Property()

    var _borderBottom: String by Property()

    var _borderBottomColor: String by Property()

    var _borderBottomLeftRadius: String by Property()

    var _borderBottomRightRadius: String by Property()

    var _borderBottomStyle: String by Property()

    var _borderBottomWidth: String by Property()

    var _borderCollapse: String by Property()

    var _borderColor: String? by NullableProperty()

    var _borderImage: String by Property()

    var _borderImageOutset: String by Property()

    var _borderImageRepeat: String by Property()

    var _borderImageSlice: String by Property()

    var _borderImageSource: String by Property()

    var _borderImageWidth: String by Property()

    var _borderLeft: String by Property()

    var _borderLeftColor: String by Property()

    var _borderLeftStyle: String by Property()

    var _borderLeftWidth: String by Property()

    var _borderRadius: String? by NullableProperty()

    var _borderRight: String by Property()

    var _borderRightColor: String by Property()

    var _borderRightStyle: String by Property()

    var _borderRightWidth: String by Property()

    var _borderSpacing: String by Property()

    var _borderStyle: String? by NullableProperty()

    var _borderTop: String by Property()

    var _borderTopColor: String by Property()

    var _borderTopLeftRadius: String by Property()

    var _borderTopRightRadius: String by Property()

    var _borderTopStyle: String by Property()

    var _borderTopWidth: String by Property()

    var _borderWidth: String? by NullableProperty()

    var _bottom: String by Property()

    var _boxDecorationBreak: String by Property()

    var _boxShadow: String? by NullableProperty()

    var _boxSizing: String by Property()

    var _breakAfter: String by Property()

    var _breakBefore: String by Property()

    var _breakInside: String by Property()

    var _captionSide: String by Property()

    var _clear: String by Property()

    var _clip: String by Property()

    var _color: String by Property()

    var _columnCount: String by Property()

    var _columnFill: String by Property()

    var _columnGap: String by Property()

    var _columnRule: String by Property()

    var _columnRuleColor: String by Property()

    var _columnRuleStyle: String by Property()

    var _columnRuleWidth: String by Property()

    var _columnSpan: String by Property()

    var _columnWidth: String by Property()

    var _columns: String by Property()

    var _content: String by Property()

    var _counterIncrement: String by Property()

    var _counterReset: String by Property()

    var _cursor: String? by NullableProperty()

    var _direction: String by Property()

    var _display: String by Property()

    var _emptyCells: String by Property()

    var _filter: String by Property()

    var _flex: String by Property()

    var _flexBasis: String by Property()

    var _flexDirection: String by Property()

    var _flexFlow: String by Property()

    var _flexGrow: String by Property()

    var _flexShrink: String by Property()

    var _flexWrap: String by Property()

    var _font: String by Property()

    var _fontFamily: String by Property()

    var _fontFeatureSettings: String by Property()

    var _fontKerning: String by Property()

    var _fontLanguageOverride: String by Property()

    var _fontSize: String by Property()

    var _fontSizeAdjust: String by Property()

    var _fontStretch: String by Property()

    var _fontStyle: String by Property()

    var _fontSynthesis: String by Property()

    var _fontVariant: String by Property()

    var _fontVariantAlternates: String by Property()

    var _fontVariantCaps: String by Property()

    var _fontVariantEastAsian: String by Property()

    var _fontVariantLigatures: String by Property()

    var _fontVariantNumeric: String by Property()

    var _fontVariantPosition: String by Property()

    var _fontWeight: String by Property()

    var _hangingPunctuation: String by Property()

    var _height: String by Property()

    var _hyphens: String by Property()

    var _imageOrientation: String by Property()

    var _imageRendering: String by Property()

    var _imageResolution: String by Property()

    var _imeMode: String by Property()

    var _justifyContent: String by Property()

    var _left: String by Property()

    var _letterSpacing: String by Property()

    var _lineBreak: String by Property()

    var _lineHeight: String by Property()

    var _listStyle: String by Property()

    var _listStyleImage: String by Property()

    var _listStylePosition: String by Property()

    var _listStyleType: String by Property()

    var _margin: String? by NullableProperty()

    var _marginBottom: String by Property()

    var _marginLeft: String by Property()

    var _marginRight: String by Property()

    var _marginTop: String by Property()

    var _mark: String by Property()

    var _markAfter: String by Property()

    var _markBefore: String by Property()

    var _marks: String by Property()

    var _marqueeDirection: String by Property()

    var _marqueePlayCount: String by Property()

    var _marqueeSpeed: String by Property()

    var _marqueeStyle: String by Property()

    var _mask: String by Property()

    var _maskType: String by Property()

    var _maxHeight: String by Property()

    var _maxWidth: String by Property()

    var _minHeight: String by Property()

    var _minWidth: String by Property()

    var _navDown: String by Property()

    var _navIndex: String by Property()

    var _navLeft: String by Property()

    var _navRight: String by Property()

    var _navUp: String by Property()

    var _objectFit: String by Property()

    var _objectPosition: String by Property()

    var _opacity: String by Property()

    var _order: String by Property()

    var _orphans: String by Property()

    var _outline: String? by NullableProperty()

    var _outlineColor: String by Property()

    var _outlineOffset: String by Property()

    var _outlineStyle: String by Property()

    var _outlineWidth: String by Property()

    var _overflowWrap: String by Property()

    var _overflowX: String by Property()

    var _overflowY: String by Property()

    var _padding: String by Property()

    var _paddingBottom: String by Property()

    var _paddingLeft: String by Property()

    var _paddingRight: String by Property()

    var _paddingTop: String by Property()

    var _pageBreakAfter: String by Property()

    var _pageBreakBefore: String by Property()

    var _pageBreakInside: String by Property()

    var _perspective: String by Property()

    var _perspectiveOrigin: String by Property()

    var _phonemes: String by Property()

    var _position: String by Property()

    var _quotes: String by Property()

    var _resize: String by Property()

    var _rest: String by Property()

    var _restAfter: String by Property()

    var _restBefore: String by Property()

    var _right: String by Property()

    var _tabSize: String by Property()

    var _tableLayout: String by Property()

    var _textAlign: String by Property()

    var _textAlignLast: String by Property()

    var _textCombineUpright: String by Property()

    var _textDecoration: String by Property()

    var _textDecorationColor: String by Property()

    var _textDecorationLine: String by Property()

    var _textDecorationStyle: String by Property()

    var _textIndent: String by Property()

    var _textJustify: String by Property()

    var _textOrientation: String by Property()

    var _textOverflow: String by Property()

    var _textShadow: String by Property()

    var _textTransform: String by Property()

    var _textUnderlinePosition: String by Property()

    var _top: String by Property()

    var _transform: String by Property()

    var _transformOrigin: String by Property()

    var _transformStyle: String by Property()

    var _transition: String by Property()

    var _transitionDelay: String by Property()

    var _transitionDuration: String by Property()

    var _transitionProperty: String by Property()

    var _transitionTimingFunction: String by Property()

    var _unicodeBidi: String by Property()

    var _verticalAlign: String by Property()

    var _visibility: String by Property()

    var _voiceBalance: String by Property()

    var _voiceDuration: String by Property()

    var _voicePitch: String by Property()

    var _voicePitchRange: String by Property()

    var _voiceRate: String by Property()

    var _voiceStress: String by Property()

    var _voiceVolume: String by Property()

    var _whiteSpace: String by Property()

    var _widows: String by Property()

    var _width: String by Property()

    var _wordBreak: String by Property()

    var _wordSpacing: String by Property()

    var _wordWrap: String by Property()

    var _writingMode: String by Property()

    var _zIndex: String by Property()

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
     * _lowerCase -> lower-case
     */
    private fun resolveRuleName(prop: KProperty<*>): String {

        return prop.name.substring(1).camelsToDashes()
    }
}