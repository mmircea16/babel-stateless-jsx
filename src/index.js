const t = require("babel-types");
const template = require("babel-template");
const fs = require('fs');
const filePath = require('path');
const Visitor = require('./visitor');

module.exports = function ({types: types}) {
    let pathToTemplate = filePath.resolve(__dirname, 'component-template.jsx');
    let classTemplate = fs.readFileSync(pathToTemplate, 'utf-8');

    const templateFor = template(classTemplate, {sourceType: 'module'});

    return {
        name: 'statless-jsx',
        inherits: require("babel-plugin-syntax-jsx"),
        visitor: Visitor.create(types, templateFor)
    }
};