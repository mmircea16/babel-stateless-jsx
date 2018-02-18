module.exports = {
    Import: function (name, source) {
        return {
            name: name,
            source: source,
            statement: `import ${name} from "./${name}.html.jsx";`
        }
    }
};