package fg.md

import fg.md.colour.MDGrayPalette
import fg.md.colour.MDGreenPalette
import fg.md.colour.MDPrimaryPalette
import fg.md.colour.MDPurplePalette
import fg.md.colour.MDRedPalette
import fg.style.colour.RgbColor
import kotlin.properties.Delegates
import kotlin.reflect.KProperty

class Theme(primaryPalette: MDPrimaryPalette,
            accentPalette: MDPrimaryPalette,
            warnPalette: MDPrimaryPalette,
            statusBar: RgbColor,
            appBar: RgbColor,
            background: RgbColor,
            cardsNdialogs: RgbColor) {

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

    var primaryPalette: MDPrimaryPalette by Delegates.observable(primaryPalette) {
        property, old, new ->
    }

    var accentPalette: MDPrimaryPalette  by Delegates.observable(primaryPalette) {
        property, old, new ->
    }

    var warnPalette: MDPrimaryPalette by Delegates.observable(primaryPalette) {
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

    companion object Statics {

        val LIGHT = Theme(primaryPalette = MDGreenPalette,
                accentPalette = MDPurplePalette,
                warnPalette = MDRedPalette,
                statusBar = MDGrayPalette.p300,
                appBar = MDGrayPalette.p100,
                background = MDGrayPalette.p50,
                cardsNdialogs = RgbColor.WHITE)
    }
}