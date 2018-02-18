const context = require('../context');
const R = require('ramda');

const visitor = require('./componentsRetriever');

module.exports = {

    create(types, templateFor) {
        return {
            JSXElement(nodePath, state) {
                if (types.isExpressionStatement(nodePath.parent)) {
                    components = [];
                    nodePath.traverse(visitor, {components});

                    const opts = {
                        SOURCE: nodePath.parent,
                        CLASS_NAME: types.identifier(context.getClassName(state)),
                    };

                    const forImports = templateFor(R.uniq(components));

                    const ast = forImports(opts);
                    nodePath.replaceWithMultiple(ast);
                }
            }

        };
    }

};