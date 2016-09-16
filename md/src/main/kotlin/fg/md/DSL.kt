package fg.md

import fg.elements.Element
import fg.md.card.MDCard
import fg.md.card.MDCardAvatar
import fg.md.card.MDCardContent
import fg.md.card.MDCardHeader
import fg.md.card.MDCardHeaderText
import fg.md.card.MDCardImage
import fg.md.card.MDCardSubtitle
import fg.md.card.MDCardTitle

fun Element.mdCard(init: MDCard.() -> Unit): MDCard {
    val el = MDCard()
    el.init()
    appendChild(el)
    return el
}

fun mdCard(init: MDCard.() -> Unit): MDCard {
    val el = MDCard()
    el.init()
    return el
}

fun MDCard.title(init: MDCardTitle.() -> Unit): MDCardTitle {

    val title = MDCardTitle()
    title.init()
    appendChild(title)
    return title
}

fun MDCardContent.title(init: MDCardTitle.() -> Unit): MDCardTitle {

    val title = MDCardTitle()
    title.init()
    appendChild(title)
    return title
}

fun MDCard.subtitle(init: MDCardSubtitle.() -> Unit): MDCardSubtitle {

    val el = MDCardSubtitle()
    el.init()
    appendChild(el)
    return el
}

fun MDCard.header(init: MDCardHeader.() -> Unit): MDCardHeader {

    val el = MDCardHeader()
    el.init()
    appendChild(el)
    return el
}

fun MDCard.image(src: String, init: MDCardImage.() -> Unit): MDCardImage {

    val el = MDCardImage(src)
    el.init()
    appendChild(el)
    return el
}

fun MDCardHeader.text(init: MDCardHeaderText.() -> Unit): MDCardHeaderText {

    val title = MDCardHeaderText()
    title.init()
    appendChild(title)
    return title
}

fun MDCardHeader.title(init: MDCardTitle.() -> Unit): MDCardTitle {

    val title = MDCardTitle()
    title.init()
    appendChild(title)
    return title
}

fun MDCardHeader.subtitle(init: MDCardSubtitle.() -> Unit): MDCardSubtitle {

    val el = MDCardSubtitle()
    el.init()
    appendChild(el)
    return el
}

fun MDCardHeaderText.title(init: MDCardTitle.() -> Unit): MDCardTitle {

    val title = MDCardTitle()
    title.init()
    appendChild(title)
    return title
}

fun MDCardHeaderText.subtitle(init: MDCardSubtitle.() -> Unit): MDCardSubtitle {

    val el = MDCardSubtitle()
    el.init()
    appendChild(el)
    return el
}

fun MDCardHeader.avatar(src: String, init: MDCardAvatar.() -> Unit): MDCardAvatar {

    val el = MDCardAvatar(src)
    el.init()
    appendChild(el)
    return el
}

fun MDCard.content(init: MDCardContent.() -> Unit): MDCardContent {

    val content = MDCardContent()
    content.init()
    appendChild(content)
    return content
}

