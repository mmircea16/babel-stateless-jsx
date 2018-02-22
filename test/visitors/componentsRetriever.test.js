const babel = require('babel-core');
const componentRetriever = require("../../src/visitors/componentsRetriever");
const traverse = require("babel-traverse");
const Import = require("../../src/import").Import;


it('contains import for Component found', () => {
    const {ast} = babel.transform("<div><Hola/><Hola><AnotherSaying/></Hola><Something/></div>",
        {plugins: ["@babel/plugin-syntax-jsx"]});
    let components = [];
    traverse.default(ast, componentRetriever, null, {components});
    expect(components).toEqual([
        new Import("Hola", "."),
        new Import("Hola", "."),
        new Import("AnotherSaying", "."),
        new Import("Something", ".")
    ])
});

it('contains import for Component found', () => {
    const {ast} = babel.transform("<div><Something __jsxpath='somewhere'/></div>",
        {plugins: ["@babel/plugin-syntax-jsx"]});
    let components = [];
    traverse.default(ast, componentRetriever, null, {components});
    expect(components).toEqual([
        new Import("Something", "somewhere"),
    ])
});