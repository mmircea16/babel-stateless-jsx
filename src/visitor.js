const context = require('./context');

module.exports = {

    create(types, templateFor) {
      return {
          ExpressionStatement(nodePath, state) {
              const ast = templateFor({
                  SOURCE: nodePath,
                  CLASS_NAME: types.identifier(context.getClassName(state))
              });

              nodePath.replaceWithMultiple(ast);
          }
      };
    }

};
