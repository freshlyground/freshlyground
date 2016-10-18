package fg.md

import fg.base.Side
import fg.beans.Action
import fg.elements.Element
import fg.elements.initAndAppendNode
import fg.keyboard.Key
import fg.md.button.MDButton
import fg.md.card.MDCard
import fg.md.card.MDCardActions
import fg.md.card.MDCardAvatar
import fg.md.card.MDCardContent
import fg.md.card.MDCardHeader
import fg.md.card.MDCardHeaderText
import fg.md.card.MDCardImage
import fg.md.card.MDCardSubtitle
import fg.md.card.MDCardTitle
import fg.md.card.MDCardTitleText
import fg.md.drawer.MDDrawer
import fg.md.menu.MDMenu
import fg.md.menu.MDMenuItem
import fg.md.radio.MDRadioButton

fun Element.mdButton(action: Action, type: MDButton.Type, init: MDButton.() -> Unit) = initAndAppendNode(MDButton(action, type), init)
fun Element.mdCard(init: MDCard.() -> Unit) = initAndAppendNode(MDCard(), init)
fun Element.mdDrawer(side: Side, init: MDDrawer.() -> Unit) = initAndAppendNode(MDDrawer(side), init)
fun Element.mdMenu(label: String? = null, shortcut: Key? = null, init: MDMenu.() -> Unit) = initAndAppendNode(MDMenu(label, shortcut), init)
fun Element.mdRadioButton(labelText: String? = null, init: MDRadioButton.() -> Unit) = initAndAppendNode(MDRadioButton(labelText = labelText), init)
fun MDCard.title(init: MDCardTitle.() -> Unit) = initAndAppendNode(MDCardTitle(), init)
fun MDCard.subtitle(init: MDCardSubtitle.() -> Unit) = initAndAppendNode(MDCardSubtitle(), init)
fun MDCard.header(init: MDCardHeader.() -> Unit) = initAndAppendNode(MDCardHeader(), init)
fun MDCard.image(src: String, init: MDCardImage.() -> Unit) = initAndAppendNode(MDCardImage(src), init)
fun MDCard.content(init: MDCardContent.() -> Unit) = initAndAppendNode(MDCardContent(), init)
fun MDCard.mdActions(init: MDCardActions.() -> Unit) = initAndAppendNode(MDCardActions(), init)
fun MDCard.titleText(init: MDCardTitleText.() -> Unit) = initAndAppendNode(MDCardTitleText(), init)
fun MDCardHeader.text(init: MDCardHeaderText.() -> Unit) = initAndAppendNode(MDCardHeaderText(), init)
fun MDCardHeader.title(init: MDCardTitle.() -> Unit) = initAndAppendNode(MDCardTitle(), init)
fun MDCardHeader.subtitle(init: MDCardSubtitle.() -> Unit) = initAndAppendNode(MDCardSubtitle(), init)
fun MDCardHeaderText.title(init: MDCardTitle.() -> Unit) = initAndAppendNode(MDCardTitle(), init)
fun MDCardHeaderText.subtitle(init: MDCardSubtitle.() -> Unit) = initAndAppendNode(MDCardSubtitle(), init)
fun MDCardHeader.avatar(src: String, init: MDCardAvatar.() -> Unit) = initAndAppendNode(MDCardAvatar(src), init)
fun MDCardTitleText.title(init: MDCardTitle.() -> Unit) = initAndAppendNode(MDCardTitle(), init)
fun MDCardTitleText.subtitle(init: MDCardSubtitle.() -> Unit) = initAndAppendNode(MDCardSubtitle(), init)
fun MDCardActions.mdButton(action: Action, init: MDButton.() -> Unit) = initAndAppendNode(MDButton(action, MDButton.Type.FLAT), init)
fun MDCardActions.mdButton(action: Action, type: MDButton.Type, init: MDButton.() -> Unit) = initAndAppendNode(MDButton(action, type), init)
fun MDMenu.mdMenuItem(action: Action, init: MDMenuItem.() -> Unit) = initAndAppendNode(MDMenuItem(action), init)

