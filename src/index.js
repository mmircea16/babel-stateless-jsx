const t = require("babel-types");

module.exports =  function ({types: t}) {
    return {
        name: 'statless-jsx',
        visitor: {
            BinaryExpression(path) {
                if (path.node.operator !== "===") {
                    return;
                }

                path.node.left = t.identifier("fizz");
                path.node.right = t.identifier("buzz");
            }
        }
    }
};