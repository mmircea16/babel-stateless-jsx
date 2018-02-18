module.exports = {
    Import: function (name, source) {
        const relativeSource = source === "." ? "." : `./${source}`;
        const statement = `import ${name} from "${relativeSource}/${name}.html.jsx";`;
        return {
            name: name,
            source: source,
            statement: statement
        }
    }
};