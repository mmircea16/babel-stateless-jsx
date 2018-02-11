const context = require('../src/context');

let mockStateWithFileName = function (fileName) {
    return {
        file: {
            opts: {
                sourceFileName: fileName
            }
        }
    };
};

describe("retrieving class name", () => {

    it("should retrieve it from .html.jsx file name", () => {
        let mockState = mockStateWithFileName("CatMeme.html.jsx");

        expect(context.getClassName(mockState)).toBe('CatMeme');
    });

    it("should retrieve it from file name without extensions", () => {
        let mockState = mockStateWithFileName("catMeme.some.extensions.here");

        expect(context.getClassName(mockState)).toBe('catMeme');
    });

    it("should be the file name when there is no extension", () => {
        let mockState = mockStateWithFileName("catMeme");

        expect(context.getClassName(mockState)).toBe('catMeme');
    });

    it("should be the file name when is part of a path", () => {
        let mockState = mockStateWithFileName("./something/that/looks/like/catMeme.jsx");

        expect(context.getClassName(mockState)).toBe('catMeme');
    })
});