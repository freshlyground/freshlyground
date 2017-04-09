package fg.elements

import kotlin.js.Date

object mainElement_performance {

    private val table by lazy {
        object : Table() {
            val tbody = Tbody()

            override fun render() {
                super.render()
                appendChild(tbody)
            }
        }
    }

    private val rowsInput: InputNumber by lazy {
        val input = InputNumber()
        input.intValue = 1000
        input
    }

    private val columnsInput: InputNumber by lazy {
        val input = InputNumber()
        input.intValue = 20
        input
    }

    private val message: Div by lazy {
        Div()
    }

    private fun renderRows() {

        console.log("renderRows")

        val start = Date()

        rowsInput.intValue?.run {
            val rows = this
            columnsInput.intValue?.run {
                val cols = this

                for (rowIndex in 0..rows) {
                    val row = Tr()
                    for (columnIndex in 0..cols) {
                        val col = Td()
                        col.appendChild(Text(resolveCellValue(rowIndex, columnIndex)))
                        row.appendChild(col)
                    }
                    table.tbody.appendChild(row)
                }
            }
        }

        val end = Date()

        message.removeChildren()
        message.appendChild(Text("Rendering rows took: ${end.getTime() - start.getTime()}"))

    }

    private fun resolveCellValue(row: Int, col: Int): String? {
        return "${(65 + col).toChar()}${row+1}"
    }

    private fun clearRows() {

        val start = Date()
        table.tbody.removeChildren()
        val end = Date()

        message.removeChildren()
        message.appendChild(Text("Clearing rows took: ${end.getTime() - start.getTime()}"))
    }

    fun start() {

        BODY with {
            h1 {
                +"Element performance"
            }
            div {
                label {
                    +"Rows"
                    appendChild(rowsInput)
                }
            }
            div {
                label {
                    +"Columns"
                    appendChild(columnsInput)
                }
            }
            div {
                button {
                    +"Render"
                    onClick {
                        renderRows()
                    }
                }
                button {
                    +"Clear rows"
                    onClick {
                        clearRows()
                    }
                }
            }
            appendChild(message)
            div {
                appendChild(table)
            }
        }
    }
}