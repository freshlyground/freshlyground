package fg.md.colour

import fg.style.colour.RgbColor

object MDPurplePalette : MDPrimaryPalette, MDAccentPalette {

    override val p50: RgbColor = RgbColor.from("#F3E5F5")
    override val p100: RgbColor = RgbColor.from("#E1BEE7")
    override val p200: RgbColor = RgbColor.from("#CE93D8")
    override val p300: RgbColor = RgbColor.from("#BA68C8")
    override val p400: RgbColor = RgbColor.from("#AB47BC")
    override val p500: RgbColor = RgbColor.from("#9C27B0")
    override val p600: RgbColor = RgbColor.from("#8E24AA")
    override val p700: RgbColor = RgbColor.from("#7B1FA2")
    override val p800: RgbColor = RgbColor.from("#6A1B9A")
    override val p900: RgbColor = RgbColor.from("#4A148C")

    override val a100: RgbColor = RgbColor.from("#EA80FC")
    override val a200: RgbColor = RgbColor.from("#E040FB")
    override val a400: RgbColor = RgbColor.from("#D500F9")
    override val a700: RgbColor = RgbColor.from("#AA00FF")
}