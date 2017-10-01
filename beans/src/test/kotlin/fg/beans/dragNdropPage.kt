package fg.beans

import fg.elements.BODY
import fg.elements.HTML
import fg.elements.div
import fg.elements.h1
import fg.elements.pct
import fg.elements.px
import fg.elements.style.typed.Display
import fg.elements.style.typed.FlexDirection
import fg.elements.toClassSelector
import fg.elements.with
import fg.style.ClassRule
import fg.style.classRule
import fg.style.colour.RgbColor

object dragNdropPage {

    fun start() {

        val columnClass: ClassRule = Unit.classRule("column".toClassSelector()) {
            _backgroundColor = "grey"
            _border = "1px solid #ccc"
            _cssFloat = "left"
            _width = 100.px.toString()
            _height = 100.px.toString()
        }

        HTML.registerCSSRule(columnClass)

        BODY with {

            h1 {
                +"Drag and Drop"
            }
            div {
                style.display = Display.flex
                style.flexDirection = FlexDirection.column

                div {
                    style.width = 50.0.pct
                    style.backgroundColor = RgbColor.BLUE
                    div {
                        addClass("column")
                        +" "
                        this.w3cElement.draggable
                    }

                    div {
                        addClass("column")
                        +" "
                    }

                    div {
                        addClass("column")
                        +" "
                    }
                }
                div {
                    style.width = 50.0.pct
                    style.backgroundColor = RgbColor.RED
                }
            }
        }
    }
}