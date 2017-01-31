package fg.elements.layout

enum class DefaultBreakpoints(val range: IntRange) : Breakpoint {
    xsmall(0..599),
    small(600..959),
    medium(960..1279),
    large(1280..1919),
    xlarge(1920..Int.MAX_VALUE);

    override fun contains(x: Double): Boolean {
        return range.contains(x)
    }
}