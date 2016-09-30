package fg.style

import fg.elements.KeyframeSelector

class KeyFrameRule(selector: KeyframeSelector) : Rule<KeyframeSelector>(selector) {

    override fun cssText(): String {
        return cssText(selector)
    }
}