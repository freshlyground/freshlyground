package fg.beans.link

import fg.base.CompareTo
import fg.base.URL
import fg.beans.icon.FontAwesomeIcons
import fg.beans.icon.Icon

class ExternalLink(val url: URL? = null,
                   display: String,
                   icon: Icon? = FontAwesomeIcons.external_link()) :
        Link<ExternalLink>(display, icon) {

    override fun compareTo(other: ExternalLink): Int {
        return CompareTo.nullSafe(url, other.url)
    }
}