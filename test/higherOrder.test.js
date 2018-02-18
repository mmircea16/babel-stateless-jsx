const babel = require('babel-core');
const plugin = require("../src/index");

let expectImport = function (importDeclaration) {
    return {
        toBe: function(localName, source) {
            expect(importDeclaration.type).toBe('ImportDeclaration');
            expect(importDeclaration.specifiers[0].local.name).toBe(localName);
            expect(importDeclaration.source.value).toBe(source);
        }
    }
};

let getImportDeclarations = function (program) {
    return program.body.filter((node) => node.type === 'ImportDeclaration');
};

it('contains import for Component found', () => {
    const {ast} = babel.transform("<div><Hola/></div>", {plugins: [plugin]});
    let importDeclarations = getImportDeclarations(ast.program);
    expect(importDeclarations.length).toBe(2);
    expectImport(importDeclarations[0]).toBe("Hola", "./Hola.html.jsx");
    expectImport(importDeclarations[1]).toBe("React", "react");
});

it('contains only one import per multiple Component instances', () => {
    const {ast} = babel.transform("<div><Hola/><Hola/></div>", {plugins: [plugin]});
    let importDeclarations = getImportDeclarations(ast.program);
    expect(importDeclarations.length).toBe(2);
    expectImport(importDeclarations[0]).toBe("Hola", "./Hola.html.jsx");
    expectImport(importDeclarations[1]).toBe("React", "react");
});