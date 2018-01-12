const pluginTester = require('babel-plugin-tester');
const statelessJSX = require('../src/index');
const path = require("path");

pluginTester({
    plugin: statelessJSX,
    fixtures: path.join(__dirname, '__fixtures__')
});