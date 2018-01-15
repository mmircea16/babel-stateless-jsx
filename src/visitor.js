module.exports = {

    create(types, templateFor) {
      return {
          ExpressionStatement(nodePath, state) {
              let fileName = state.file.opts.sourceFileName;

              const ast = templateFor({
                  SOURCE: nodePath,
                  CLASS_NAME: types.identifier(fileName.replace(".jsx",""))
              });

              nodePath.replaceWithMultiple(ast);
          }
      };
    }

};
