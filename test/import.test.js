const Import = require("../src/import").Import;

it("should construct the statement for a name and source", () => {
   const helloImport = new Import("Hello", ".");
   expect(helloImport.statement).toBe("import Hello from \"./Hello.html.jsx\";")
});