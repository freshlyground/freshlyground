package fg.md.colour

import fg.style.colour.RgbColor

interface MDPalette {

    val s50: RgbColor
    val s100: RgbColor
    val s200: RgbColor
    val s300: RgbColor
    val s400: RgbColor
    val s500: RgbColor
    val s600: RgbColor
    val s700: RgbColor
    val s800: RgbColor
    val s900: RgbColor


}

interface MDAlphaPalette {

    val a100: RgbColor
    val a200: RgbColor
    val a400: RgbColor
    val a700: RgbColor
}