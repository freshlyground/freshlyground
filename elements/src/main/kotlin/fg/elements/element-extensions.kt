package fg.elements

import org.w3c.dom.events.Event
import org.w3c.dom.events.MouseEvent


infix fun <T> T.with(init: T.() -> Unit): T {
    this.init()
    return this
}

fun Element.onClick(listener: (event: Event) -> Unit) {
    this.w3cElement.addEventListener("click", listener)
}

fun Element.unClick(listener: (event: Event) -> Unit) {
    this.w3cElement.removeEventListener("click", listener)
}

fun Element.onFocus(listener: (event: Event) -> Unit) {
    this.w3cElement.addEventListener("focus", listener)
}

fun Element.unFocus(listener: (event: Event) -> Unit) {
    this.w3cElement.removeEventListener("focus", listener)
}

fun Element.onBlur(listener: (event: Event) -> Unit) {
    this.w3cElement.addEventListener("blur", listener)
}

fun Element.unBlur(listener: (event: Event) -> Unit) {
    this.w3cElement.removeEventListener("blur", listener)
}

fun Element.onInput(listener: (event: Event) -> Unit) {
    this.w3cElement.addEventListener("input", listener)
}

fun Element.unInput(listener: (event: Event) -> Unit) {
    this.w3cElement.removeEventListener("input", listener)
}

fun Element.onChange(listener: (event: Event) -> Unit) {
    this.w3cElement.addEventListener("change", listener)
}

fun Element.unChange(listener: (event: Event) -> Unit) {
    this.w3cElement.removeEventListener("change", listener)
}


fun Element.onDblClick(listener: (event: Event) -> Unit) {
    this.w3cElement.addEventListener("dlbclick", listener)
}

fun Element.unDblClick(listener: (event: Event) -> Unit) {
    this.w3cElement.removeEventListener("dblclick", listener)
}

fun Element.onMouseDown(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.addEventListener("mousedown", listener as ((Event) -> Unit))
}

fun Element.unMouseDown(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.removeEventListener("mousedown", listener as ((Event) -> Unit))
}

fun Element.onMouseUp(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.addEventListener("mouseup", listener as ((Event) -> Unit))
}

fun Element.unMouseUp(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.removeEventListener("mouseup", listener as ((Event) -> Unit))
}

fun Element.onMouseEnter(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.addEventListener("mouseenter", listener as ((Event) -> Unit))
}

fun Element.unMouseEnter(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.removeEventListener("mouseenter", listener as ((Event) -> Unit))
}

fun Element.onMouseLeave(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.addEventListener("mouseleave", listener as ((Event) -> Unit))
}

fun Element.unMouseLeave(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.removeEventListener("mouseleave", listener as ((Event) -> Unit))
}

fun Element.onMouseMove(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.addEventListener("mousemove", listener as ((Event) -> Unit))
}

fun Element.unMouseMove(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.removeEventListener("mousemove", listener as ((Event) -> Unit))
}

fun Element.onMouseOut(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.addEventListener("mouseout", listener as ((Event) -> Unit))
}

fun Element.unMouseOut(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.removeEventListener("mouseout", listener as ((Event) -> Unit))
}

fun Element.onMouseOver(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.addEventListener("mouseover", listener as ((Event) -> Unit))
}

fun Element.unMouseOver(listener: (mouseEvent: MouseEvent) -> Unit) {
    this.w3cElement.removeEventListener("mouseover", listener as ((Event) -> Unit))
}

fun Element.onScroll(listener: (event: Event) -> Unit) {
    this.w3cElement.addEventListener("scroll", listener)
}

fun Element.unScroll(listener: (event: Event) -> Unit) {
    this.w3cElement.removeEventListener("scroll", listener)
}

fun Element.onKeyUp(listener: (keyboardEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("keyup", listener)
}

fun Element.unKeyUp(listener: (keyboardEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("keyup", listener)
}

fun Element.onKeyPress(listener: (keyboardEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("keypress", listener)
}

fun Element.unKeyPress(listener: (keyboardEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("keypress", listener)
}

fun Element.onKeyDown(listener: (keyboardEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("keydown", listener)
}

fun Element.unKeyDown(listener: (keyboardEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("keydown", listener)
}

fun Element.onDrag(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("drag", listener)
}

fun Element.unDrag(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("drag", listener)
}

fun Element.onDragEnd(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("dragend", listener)
}

fun Element.unDragEnd(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("dragend", listener)
}

fun Element.onDragEnter(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("dragenter", listener)
}

fun Element.unDragEnter(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("dragenter", listener)
}

fun Element.onDragLeave(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("dragleave", listener)
}

fun Element.unDragLeave(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("dragleave", listener)
}

fun Element.onDragOver(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("dragover", listener)
}

fun Element.unDragOver(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("dragover", listener)
}

fun Element.onDragStart(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("dragstart", listener)
}

fun Element.unDragStart(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("dragstart", listener)
}

fun Element.onDrop(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.addEventListener("drop", listener)
}

fun Element.unDrop(listener: (dragEvent: Event) -> Unit) {
    this.w3cElement.removeEventListener("drop", listener)
}