package fg.elements


open class Node(internal val w3cNode: org.w3c.dom.Node) {

    protected val childNodes: List<Node> get() = _childNodes
    private val _childNodes: MutableList<Node> = arrayListOf()
    private val _childrenMountInstructions: MutableList<Pair<(Node) -> Unit, Node>> = arrayListOf()

    internal var _parentNode: Node? = null
    val _nodeName: String get() = w3cNode.nodeName

    open val mounted: Boolean
        get() = _parentNode?.w3cNode?.contains(this.w3cNode) ?: false


    var textContent: String?
        get() = w3cNode.textContent
        set(value) {
            removeChildren()
            w3cNode.textContent = value
            _childNodes.addAll(parseChildrenFromDOM())
        }

    fun prependChild(node: Node): Node {
        insertBefore(node, _childNodes.first())
        return node
    }

    fun insertBefore(node: Node, child: Node): Node {

        val childIndex = _childNodes.indexOf(child)
        if (childIndex == -1) {
            throw IllegalArgumentException("reference ${child.w3cNode.nodeName} is expected as child")
        }

        node._parentNode = this

        if (node is Element) {
            node.render()
            node.renderChildren()
        }

        val mountFn: (Node) -> Unit = { w3cNode.insertBefore(it.w3cNode, child.w3cNode) }
        if (mounted) {
            mountChild(mountFn, node)
        } else {
            _childrenMountInstructions.add(Pair(mountFn, node))
        }

        _childNodes.add(childIndex, node)

        return node
    }

    fun appendChild(node: Node): Node {

        node._parentNode = this

        if (node is Element) {
            node.render()
            node.renderChildren()
        }

        val mountFn: (Node) -> Unit = { w3cNode.appendChild(it.w3cNode) }
        if (mounted) {
            mountChild(mountFn, node)
        } else {
            _childrenMountInstructions.add(Pair(mountFn, node))
        }

        _childNodes.add(node)

        return node
    }

    private fun parseChildrenFromDOM(): MutableList<Node> {

        val nodes: MutableList<Node> = arrayListOf()
        val childW3cNodes = w3cNode.childNodes
        for (i in 0..childW3cNodes.length - 1) {
            val childNode = childW3cNodes[i]
            when (childNode) {
                is org.w3c.dom.HTMLElement -> nodes.add(Element(existingElement = childNode))
                is org.w3c.dom.Text -> nodes.add(Text(existingNode = childNode))
            }
        }
        return nodes
    }

    internal fun renderChildren() {

        for (child in _childNodes) {
            if (child is Element) {
                child.render()
            }
            child.renderChildren()
        }
    }

    private fun mountChild(mountFn: (Node) -> Unit, child: Node) {
        console.info("${jsClass.name}.mountChild(${child.jsClass.name}) ")
        mountFn(child)
    }

    internal fun mountChildren() {

        for (mountFn_n_child in _childrenMountInstructions) {
            mountChild(mountFn_n_child.first, mountFn_n_child.second)
        }

        _childrenMountInstructions.clear()

        for (child in _childNodes) {
            child.mountChildren()
        }
    }

    fun removeChildren() {
        while (_childNodes.isNotEmpty()) {
            removeChild(_childNodes.first())
        }
    }

    fun removeChild(node: Node) {

        if (node is Element) {
            node.willUnMount()
        }

        if (mounted) {
            this.w3cNode.removeChild(node.w3cNode)
        }
        _childNodes.remove(node)
    }
}