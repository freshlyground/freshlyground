import fg.keyboard.Key
import fg.keyboard.KeyBinding
import fg.keyboard.Keyboard
import fg.keyboard.Keys
import fg.keyboard.Type

object mainKeyboard {

    fun start() {

        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(Key.from("ctrl+a")),
                callback = { console.log("********* a") }))

        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("ctrl+b"))),
                type = Type.keydown,
                callback = { console.log("********* b") }))
//
//        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("c"))),
//                type = Type.keyup,
//                callback = { console.log("********* c") }))
//
//
//        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("ctrl+b"))),
//                type = Type.keypress,
//                callback = { console.log("********* ctrl+b") }))
//
//        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("ctrl+b"))),
//                type = Type.keydown,
//                callback = { console.log("********* ctrl+b") }))
//
//        Keyboard.DOCUMENT.add(KeyBinding(keys = Keys(listOf(Key.from("ctrl+b"))),
//                type = Type.keyup,
//                callback = { console.log("********* ctrl+b") }))
    }
}