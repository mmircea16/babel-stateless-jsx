visitorFor = function (attribute) {
    return {
        JSXAttribute(nodePath) {
            let name = nodePath.node.name.name;
            if (name === attribute) {
                nodePath.remove()
            }
        }
    }
};

module.exports = {
    "for": visitorFor
};