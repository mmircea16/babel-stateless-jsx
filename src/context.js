module.exports = {
    getClassName(state) {
        let fileName = state.file.opts.sourceFileName;
        return fileName.replace(".jsx", "");
    }
};