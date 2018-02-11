let lastElement = function (array) {
    return array[array.length - 1];
};

let beforeDot = function (fileName) {
    return fileName.split(".")[0];
};

module.exports = {
    getClassName(state) {
        let fileName = state.file.opts.sourceFileName;
        let pathParts = fileName.split("/");
        return beforeDot(lastElement(pathParts))
    }
};