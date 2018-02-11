const context = require('./context');

module.exports = {

    create(types, templateFor) {
      return {
          JSXElement(nodePath, state) {
              if (types.isExpressionStatement(nodePath.parent)) {

                  const ast = templateFor({
                      SOURCE: nodePath.parent,
                      CLASS_NAME: types.identifier(context.getClassName(state))
                  });

                  nodePath.replaceWithMultiple(ast);
              }
          }
      };
    }

};
