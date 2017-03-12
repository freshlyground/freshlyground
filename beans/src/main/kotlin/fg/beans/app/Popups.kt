package fg.beans.app

import fg.elements.Div

class Popups : Div() {

    override fun render() {
        super.render()

        addClass("$pkg-popups")
    }
}