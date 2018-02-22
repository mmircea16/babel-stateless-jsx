const Import = require("../../src/import").Import;
const R = require('ramda');
const attributeRemover = require("./attributeRemover");

module.exports = {
    JSXElement(nodePath) {
        let nodeName = nodePath.node.openingElement.name.name;
        if (nodeName[0] === nodeName[0].toUpperCase()) {
            const attrs = nodePath.node.openingElement.attributes;
            const jsxPaths = R.filter((node) => node.name.name === '__jsxpath', attrs);
            const source = jsxPaths.length === 0 ? "." : jsxPaths[0].value.value;

            this.components.push(new Import(nodeName, source));

            if (jsxPaths.length > 0) {
                nodePath.traverse(attributeRemover)
            }
        }
    }

};