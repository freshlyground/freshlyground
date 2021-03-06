package fg.elements

import org.w3c.dom.get


open class Node(internal val w3cNode: org.w3c.dom.Node) {

    protected val childNodes: List<Node> get() = _childNodes
    private val _childNodes: MutableList<Node> = arrayListOf()
    private val _childrenMountInstructions: MutableList<Pair<(Node) -> Unit, Node>> = arrayListOf()

    var rendering: Boolean = false
        private set

    var rendered: Boolean = false
        private set

    internal var _parentNode: Node? = null
    val _nodeName: String get() = w3cNode.nodeName

    open val mounted: Boolean
        get() = _parentNode?.w3cNode?.contains(this.w3cNode) ?: false


    var textContent: String?
        get() = w3cNode.textContent
        set(value) {
            removeChildren()
            if (value != null) {
                w3cNode.textContent = value
                _childNodes.addAll(parseChildrenFromDOM())
            }
        }

    fun hasChild(child: Node): Boolean {
        return _childNodes.contains(child)
    }

    fun prependChild(node: Node): Node {
        if (_childNodes.isEmpty()) {
            appendChild(node)
            return node
        } else {
            insertBefore(node, _childNodes.first())
            return node
        }
    }

    fun insertBefore(node: Node, child: Node): Node {

        if (node._parentNode != null) {
            throw IllegalStateException("Node cannot be added. It's already added. Please remove it first.")
        }

        val childIndex = _childNodes.indexOf(child)
        if (childIndex == -1) {
            throw IllegalArgumentException("reference ${child.w3cNode.nodeName} is expected as child")
        }

        node._parentNode = this

        if (node is Element && (rendering || rendered) && !child.rendered) {
            node.rendering = true
            node.callRender()
            node.rendered = true
            node.rendering = false
            node.renderChildren()
        }

        val mountFn: (Node) -> Unit = { w3cNode.insertBefore(it.w3cNode, child.w3cNode) }
        if (mounted) {
            mountChild(mountFn, node)
            mountChildren()
        } else {
            _childrenMountInstructions.add(Pair(mountFn, node))
        }

        _childNodes.add(childIndex, node)
        childAdded(node)

        return node
    }

    fun appendChild(node: Node): Node {

        if (node._parentNode != null) {
            throw IllegalStateException("Node cannot be added. It's already added. Please remove it first.")
        }

        node._parentNode = this

        if (node is Element && (rendering || rendered) && !node.rendered) {
            node.rendering = true
            node.callRender()
            node.rendered = true
            node.rendering = false
            node.renderChildren()
        }

        val mountFn: (Node) -> Unit = { w3cNode.appendChild(it.w3cNode) }
        if (mounted) {
            mountChild(mountFn, node)
            node.mountChildren()
        } else {
            _childrenMountInstructions.add(Pair(mountFn, node))
        }

        _childNodes.add(node)
        childAdded(node)

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
            if (child is Element && !child.rendered) {
                child.callRender()
                child.rendered = true
            }
            child.renderChildren()
        }
    }

    private fun mountChild(mountFn: (Node) -> Unit, child: Node) {
        //console.info("${jsClass.name}.mountChild(${child.jsClass.name}) ")
        mountFn(child)

        if (child is Element) {
            child.callDidMount()
        }
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
            node.callWillUnMount()
        }

        if (mounted) {
            this.w3cNode.removeChild(node.w3cNode)
        }
        _childNodes.remove(node)
        node._parentNode = null
        childRemoved(this)
    }

    fun removeSelf() {
        _parentNode?.removeChild(this)
    }

    /**
     * This function will be called after given child has been added to this element.
     * Override this function when needed.
     */
    open fun childAdded(child: Node) {

    }

    /**
     * This function will be called after given child has been removed from this element.
     * Override this function when needed.
     */
    open fun childRemoved(child: Node) {

    }

}