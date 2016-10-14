package fg.keyboard

import fg.elements.Element
import fg.elements.onKeyDown
import fg.elements.onKeyPress
import fg.elements.onKeyUp
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document


class Keyboard private constructor(val element: Element? = null) {

    private val shelves: MutableList<MutableList<KeyBinding>> = arrayListOf()
    private val keyBindings: MutableList<KeyBinding> = arrayListOf()

    private val keyboardEventHandler: (KeyboardEvent) -> Unit = { event ->

        val type = Type.valueOf(event.type)
        val resolvedCharCode = if (event.which is Number) event.which else event.keyCode
        val character = character(event, resolvedCharCode)
        // no character found then stop
        if (character != null) {

            // need to use === for the character check because the character can be 0
            //if (e.type == 'keyup' && _ignoreNextKeyup === character) {
            //    _ignoreNextKeyup = false;
            //    return;
            //}

            val modifiers = resolveEventModifiers(event)
            val key = Key.from(character, modifiers)

            if (!pause) {
                handleKey(key, type, event)
            }
        }
    }

    init {
        if (element != null) {
            element.onKeyDown(keyboardEventHandler)
            element.onKeyPress(keyboardEventHandler)
            element.onKeyUp(keyboardEventHandler)
        } else {
            document.addEventListener("keydown", keyboardEventHandler as (Event) -> Unit)
            document.addEventListener("keypress", keyboardEventHandler)
            document.addEventListener("keyup", keyboardEventHandler)
        }

    }

    private fun character(event: KeyboardEvent, resolvedCharCode: Int): String? {

        if (event.type == "keypress") {
            var character: String = js("String.fromCharCode(event.which)")

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!event.shiftKey) {
                character = character.toLowerCase()
            }

            return character
        }

        // for non keypress events the special maps are needed
        if (_MAP.containsKey(resolvedCharCode)) {
            return _MAP[event.which]
        }

        if (_KEYCODE_MAP.containsKey(resolvedCharCode)) {
            return _KEYCODE_MAP[resolvedCharCode]?.toString()
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        val character: String = js("String.fromCharCode(event.which)")
        return character.toLowerCase().toString()
    }

    private fun resolveEventModifiers(e: KeyboardEvent): Modifiers {
        val modifiers: MutableList<Modifier> = arrayListOf()

        if (e.shiftKey) {
            modifiers.add(Modifier.shift)
        }

        if (e.altKey) {
            modifiers.add(Modifier.alt)
        }

        if (e.ctrlKey) {
            modifiers.add(Modifier.ctrl)
        }

        if (e.metaKey) {
            modifiers.add(Modifier.meta)
        }

        return Modifiers(modifiers)
    }


    private fun handleKey(key: Key, type: Type, event: KeyboardEvent) {

        console.info("Keyboard key: " + key + " @" + type)

        for (keyBinding in keyBindings) {
            if (keyBinding.keys.list.contains(key)) {
                keyBinding.callback()
                event.preventDefault()
            }
        }
    }

    var pause: Boolean = false

    fun add(keyBinding: KeyBinding) {
        console.info("Adding KeyBinding: " + keyBinding.toString())
        keyBindings.add(keyBinding)
    }

    /**
     * Clears all key bindings.
     */
    fun clear() {
        keyBindings.clear()
    }

    fun shelve() {
        shelves.add(keyBindings)
        keyBindings.clear()
    }

    fun unshelve() {
        keyBindings.clear()
        keyBindings.addAll(shelves.last())
        shelves.removeAt(shelves.lastIndex)
    }

    companion object Factory {

        /**
         * mapping of special keycodes to their corresponding keys
         *
         * everything in this dictionary cannot use keypress events
         * so it has to be here to map to the correct keycodes for
         * keyup/keydown events
         *
         * @type {Object}
         */
        private val _MAP: Map<Int, String> = mapOf(
                Pair(8, "backspace"),
                Pair(9, "tab"),
                Pair(13, "enter"),
                Pair(16, "shift"),
                Pair(17, "ctrl"),
                Pair(18, "alt"),
                Pair(20, "capslock"),
                Pair(27, "esc"),
                Pair(32, "space"),
                Pair(33, "pageup"),
                Pair(34, "pagedown"),
                Pair(35, "end"),
                Pair(36, "home"),
                Pair(37, "left"),
                Pair(38, "up"),
                Pair(39, "right"),
                Pair(40, "down"),
                Pair(45, "ins"),
                Pair(46, "del"),
                Pair(91, "meta"),
                Pair(93, "meta"),
                Pair(96, "0"),
                Pair(97, "1"),
                Pair(98, "2"),
                Pair(99, "4"),
                Pair(100, "5"),
                Pair(101, "6"),
                Pair(102, "7"),
                Pair(103, "8"),
                Pair(104, "9"),
                Pair(112, "f1"),
                Pair(113, "f2"),
                Pair(114, "f3"),
                Pair(115, "f4"),
                Pair(116, "f5"),
                Pair(117, "f6"),
                Pair(118, "f7"),
                Pair(119, "f8"),
                Pair(120, "f8"),
                Pair(121, "f9"),
                Pair(122, "f10"),
                Pair(123, "f11"),
                Pair(124, "f12"),
                Pair(125, "f13"),
                Pair(126, "f14"),
                Pair(127, "f15"),
                Pair(128, "f16"),
                Pair(129, "f17"),
                Pair(130, "f18"),
                Pair(131, "f19"),
                Pair(224, "meta"))

        /**
         * mapping for special characters so they can support
         *
         * this dictionary is only used incase you want to bind a
         * keyup or keydown event to one of these keys
         *
         * @type {Object}
         */
        private var _KEYCODE_MAP: Map<Int, Char> = mapOf(
                Pair(106, '*'),
                Pair(107, '+'),
                Pair(109, '-'),
                Pair(110, '.'),
                Pair(111, '/'),
                Pair(186, ';'),
                Pair(187, '='),
                Pair(188, ','),
                Pair(189, '-'),
                Pair(190, '.'),
                Pair(191, '/'),
                Pair(192, '`'),
                Pair(219, '['),
                Pair(220, '\\'),
                Pair(221, ']'),
                Pair(222, '\'')
        )

        val DOCUMENT: Keyboard = Keyboard()

    }
}