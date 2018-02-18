const babel = require('babel-core');
const componentRetriever = require("../../src/visitors/componentsRetriever");
const traverse = require("babel-traverse");

it('contains import for Component found', () => {
    const {ast} = babel.transform("<div><Hola/><Hola><AnotherSaying/></Hola><Something/></div>",
        {plugins: ["@babel/plugin-syntax-jsx"]});
    let components = [];
    traverse.default(ast, componentRetriever, null, {components});
    expect(components).toEqual(["Hola", "Hola", "AnotherSaying", "Something"])
});
