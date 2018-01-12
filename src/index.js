const t = require("babel-types");
const template = require("babel-template");
const fs = require('fs');
const filePath = require('path');

module.exports = function ({types: t}) {
    let pathToTemplate = filePath.resolve(__dirname, 'component-template.jsx');
    let classTemplate = fs.readFileSync(pathToTemplate, 'utf-8');

    const templateFor = template(classTemplate, {sourceType: 'module'});

    return {
        name: 'statless-jsx',
        inherits: require("babel-plugin-syntax-jsx"),
        visitor: {
            ExpressionStatement(nodePath, state) {
                let fileName = state.file.opts.sourceFileName;

                const ast = templateFor({
                    SOURCE: nodePath,
                    CLASS_NAME: t.identifier(fileName.replace(".jsx",""))
                });

                nodePath.replaceWithMultiple(ast);
            }
        }
    }
};