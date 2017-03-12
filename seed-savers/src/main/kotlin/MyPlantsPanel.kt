import fg.elements.Div
import fg.elements.Text

class MyPlantsPanel : Div() {

    override fun render() {
        super.render()

        appendChild(Text("My plants"))
    }
}