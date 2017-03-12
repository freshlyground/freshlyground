package fg.beans.app

import fg.elements.Div

class Content : Div() {

    override fun render() {
        super.render()

        addClass("$pkg-content")
    }
}