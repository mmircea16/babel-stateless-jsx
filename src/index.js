const template = require('babel-template');
const fs = require('fs');
const filePath = require('path');
const Visitor = require('./visitors/visitor');

function withNImports(classTemplate, imports) {
    for (let i=0; i<imports.length; i++) {
        classTemplate = imports[i].statement + '\n' + classTemplate
    }
    return classTemplate
}

module.exports = function ({types: types}) {
    let pathToTemplate = filePath.resolve(__dirname, 'component-template.jsx');
    let classTemplate = fs.readFileSync(pathToTemplate, 'utf-8');

    const templateFor = (noOfImports) =>
        template(withNImports(classTemplate, noOfImports), {sourceType: 'module', plugins: ['jsx']});

    return {
        name: 'stateless-jsx',
        inherits: require('babel-plugin-syntax-jsx'),
        visitor: Visitor.create(types, templateFor)
    }
};