const pluginTester = require('babel-plugin-tester');
const statelessJSX = require('../src/index');
const path = require("path");

pluginTester({
    plugin: statelessJSX,
    tests: [
        {
            fixture:  path.join(__dirname, '__fixtures__/simple/Hello.jsx'),
            outputFixture: path.join(__dirname, '__fixtures__/simple/output.js')
        }
    ]
});