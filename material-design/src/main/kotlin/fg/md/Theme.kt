package fg.md

import fg.md.colour.MDColor
import fg.md.colour.MDGrayPalette
import fg.md.colour.MDGreenPalette
import fg.md.colour.MDPurplePalette
import fg.md.colour.MDRedPalette
import fg.style.colour.RgbColor
import kotlin.properties.Delegates
import kotlin.reflect.KProperty

class Theme(primaryColor: RgbColor,
            accentColor: RgbColor,
            warnColor: RgbColor,
            statusBar: RgbColor,
            appBar: RgbColor,
            background: RgbColor,
            cardsNdialogs: RgbColor,
            font: String) {

    private val propertyChangedListeners: MutableList<(theme: Theme,
                                                       property: KProperty<*>,
                                                       old: Any?, new: Any?) -> Unit> = arrayListOf()

    internal fun notifyPropertyChanged(property: KProperty<*>, old: Any?, new: Any?) {
        for (listener in propertyChangedListeners) listener(this, property, old, new)
    }

    fun <T : Any?> onPropertyChanged(listener: (theme: Theme, property: KProperty<*>, old: T?, new: T?) -> Unit) {
        propertyChangedListeners.add(listener as (Theme, KProperty<*>, Any?, Any?) -> Unit)
    }

    fun unPropertyChanged(listener: (theme: Theme, property: KProperty<*>, old: Any?, new: Any?) -> Unit) {
        propertyChangedListeners.remove(listener)
    }

    var primaryColor: RgbColor by Delegates.observable(primaryColor) {
        property, old, new ->
    }

    var accentColor: RgbColor  by Delegates.observable(accentColor) {
        property, old, new ->
    }

    var warnColor: RgbColor by Delegates.observable(warnColor) {
        property, old, new ->
    }
    var statusBar: RgbColor by Delegates.observable(statusBar) {
        property, old, new ->
    }
    var appBar: RgbColor by Delegates.observable(appBar) {
        property, old, new ->
    }
    var background: RgbColor by Delegates.observable(background) {
        property, old, new ->
    }
    var cardsNdialogs: RgbColor by Delegates.observable(cardsNdialogs) {
        property, old, new ->
    }
    val font: String = font

    fun color(color: MDColor, default: RgbColor): RgbColor {

        return when (color) {
            MDColor.DEFAULT -> default
            MDColor.PRIMARY -> primaryColor
            MDColor.ACCENT -> accentColor
            MDColor.WARN -> warnColor
        }
    }

    companion object Statics {

        val LIGHT = Theme(primaryColor = MDGreenPalette.p500,
                accentColor = MDPurplePalette.p500,
                warnColor = MDRedPalette.p500,
                statusBar = MDGrayPalette.p300,
                appBar = MDGrayPalette.p100,
                background = MDGrayPalette.p50,
                cardsNdialogs = RgbColor.WHITE,
                font = "Roboto, sans-serif")
    }


}