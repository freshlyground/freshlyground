package fg.keyboard

data class KeyBinding(val keys: Keys, val type: Type = Type.keypress, val callback: () -> Unit)
