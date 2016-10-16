package fg.beans.link

import fg.base.CompareTo
import fg.base.Path
import fg.beans.icon.FontAwesomeIcons
import fg.beans.icon.Icon

class LocalLink(val path: Path,
                display: String,
                icon: Icon? = FontAwesomeIcons.link()) :
        Link<LocalLink>(display, icon) {

    override fun compareTo(other: LocalLink): Int {
        return CompareTo.nullSafe(path, other.path)
    }
}