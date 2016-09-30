package fg.md.colour

import fg.style.colour.RgbColor

object MDRedPalette : MDPrimaryPalette, MDAccentPalette {

    override val p50: RgbColor = RgbColor.from("#FFEBEE")
    override val p100: RgbColor = RgbColor.from("#FFCDD2")
    override val p200: RgbColor = RgbColor.from("#EF9A9A")
    override val p300: RgbColor = RgbColor.from("#E57373")
    override val p400: RgbColor = RgbColor.from("#EF5350")
    override val p500: RgbColor = RgbColor.from("#F44336")
    override val p600: RgbColor = RgbColor.from("#E53935")
    override val p700: RgbColor = RgbColor.from("#D32F2F")
    override val p800: RgbColor = RgbColor.from("#C62828")
    override val p900: RgbColor = RgbColor.from("#B71C1C")

    override val a100: RgbColor = RgbColor.from("#FF8A80")
    override val a200: RgbColor = RgbColor.from("#FF5252")
    override val a400: RgbColor = RgbColor.from("#FF1744")
    override val a700: RgbColor = RgbColor.from("#D50000")
}