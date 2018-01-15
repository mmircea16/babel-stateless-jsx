const context = require('../src/context')
describe("retrieving class name", () => {
   it("should retrieve it from file name", () => {
       let mockState = {
           file: {
               opts: {
                   sourceFileName: "CatMeme.jsx"
               }
           }
       };

       expect(context.getClassName(mockState)).toBe('CatMeme');
   })
});