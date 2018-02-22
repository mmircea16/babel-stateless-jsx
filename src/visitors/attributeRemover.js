module.exports = {
    JSXAttribute(nodePath) {
        let name = nodePath.node.name.name;
        if (name === '__jsxpath') {
            nodePath.remove()
        }
    }
}