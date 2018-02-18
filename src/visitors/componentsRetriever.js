module.exports = {
    JSXElement(nodePath) {
        let nodeName = nodePath.node.openingElement.name.name;
        if (nodeName[0] === nodeName[0].toUpperCase()) {
            this.components.push(nodeName)
        }
    }

};