package fg.elements

object mainSelector {

    fun start() {

        console.log(DescendantSelector("div".toSelector(), ".descendant".toSelector()).toString())
        console.log(ChildSelector("div".toSelector(), ".child".toSelector()).toString())
        console.log(AdjacentSiblingSelector("div".toSelector(), ".adjacent-sibling".toSelector()).toString())
        console.log(GeneralSiblingSelector("div".toSelector(), ".general-sibling".toSelector()).toString())
        console.log(AndSelector("div".toSelector(), ".special".toSelector()).toString())
    }
}