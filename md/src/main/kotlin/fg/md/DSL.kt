package fg.md

import fg.beans.Action
import fg.beans.drawer.Drawer
import fg.elements.Element
import fg.elements.initAndAppendNode
import fg.md.button.MDButton
import fg.md.card.MDCard
import fg.md.card.MDCardAvatar
import fg.md.card.MDCardContent
import fg.md.card.MDCardHeader
import fg.md.card.MDCardHeaderText
import fg.md.card.MDCardImage
import fg.md.card.MDCardSubtitle
import fg.md.card.MDCardTitle
import fg.md.drawer.MDDrawer

fun Element.mdButton(action: Action, type: MDButton.Type, init: MDButton.() -> Unit) = initAndAppendNode(MDButton(action, type), init)
fun Element.mdDrawer(side: Drawer.Side, init: MDDrawer.() -> Unit) = initAndAppendNode(MDDrawer(side), init)
fun Element.mdCard(init: MDCard.() -> Unit) = initAndAppendNode(MDCard(), init)
fun MDCard.title(init: MDCardTitle.() -> Unit) = initAndAppendNode(MDCardTitle(), init)
fun MDCard.subtitle(init: MDCardSubtitle.() -> Unit) = initAndAppendNode(MDCardSubtitle(), init)
fun MDCard.header(init: MDCardHeader.() -> Unit) = initAndAppendNode(MDCardHeader(), init)
fun MDCard.image(src: String, init: MDCardImage.() -> Unit) = initAndAppendNode(MDCardImage(src), init)
fun MDCard.content(init: MDCardContent.() -> Unit) = initAndAppendNode(MDCardContent(), init)
fun MDCardHeader.text(init: MDCardHeaderText.() -> Unit) = initAndAppendNode(MDCardHeaderText(), init)
fun MDCardHeader.title(init: MDCardTitle.() -> Unit) = initAndAppendNode(MDCardTitle(), init)
fun MDCardHeader.subtitle(init: MDCardSubtitle.() -> Unit) = initAndAppendNode(MDCardSubtitle(), init)
fun MDCardHeaderText.title(init: MDCardTitle.() -> Unit) = initAndAppendNode(MDCardTitle(), init)
fun MDCardHeaderText.subtitle(init: MDCardSubtitle.() -> Unit) = initAndAppendNode(MDCardSubtitle(), init)
fun MDCardHeader.avatar(src: String, init: MDCardAvatar.() -> Unit) = initAndAppendNode(MDCardAvatar(src), init)
fun MDCardContent.title(init: MDCardTitle.() -> Unit) = initAndAppendNode(MDCardTitle(), init)

