const babel = require('babel-core');
const traverse = require("babel-traverse");
const attributeRemover = require("../../src/visitors/attributeRemover");

function expectNoAttribute(ast, attributeName) {
    traverse.default(ast, {
        JSXAttribute(nodePath) {
            let name = nodePath.node.name.name;
            if (name === attributeName) {
                expect(false).toBe(true);
            }
        }
    })
}

it('should remove the __jsxpath attribute', () => {
    const {ast} = babel.transform("<div><Something __jsxpath='somewhere'/></div>",
        {plugins: ["@babel/plugin-syntax-jsx"]});
    let components = [];
    traverse.default(ast, attributeRemover.for("__jsxpath"), null, {components});
    expectNoAttribute(ast, "__jsxpath")
});