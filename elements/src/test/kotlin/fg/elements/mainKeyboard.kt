package fg.elements

import fg.keyboard.Key
import fg.keyboard.KeyBinding
import fg.keyboard.Keyboard
import fg.keyboard.Keys
import fg.keyboard.Type

object mainKeyboard {

    fun start() {

        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("a"))),
                type = Type.keypress,
                callback = { console.log("********* a") }))

        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("a"))),
                type = Type.keydown,
                callback = { console.log("********* a") }))

        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("a"))),
                type = Type.keyup,
                callback = { console.log("********* a") }))


        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("ctrl+b"))),
                type = Type.keypress,
                callback = { console.log("********* ctrl+b") }))

        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("ctrl+b"))),
                type = Type.keydown,
                callback = { console.log("********* ctrl+b") }))

        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("ctrl+b"))),
                type = Type.keyup,
                callback = { console.log("********* ctrl+b") }))
    }
}