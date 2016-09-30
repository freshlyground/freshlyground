package fg.style

import fg.elements.AnimationNameSelector

class KeyframesRule(selector: AnimationNameSelector) : Rule<AnimationNameSelector>(selector) {

    override fun cssText(): String {

        var s = "@keyframes "
        s += selector.toString()
        s += " { "
        for ((key, value) in _map) {

            s += "$key: $value; "

        }


        _childStyles.forEach { s += it.cssText() }

        s += "}"
        return s
    }
}