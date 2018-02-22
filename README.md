## React stateless component plugin

This gives the ability to write pure JSX for stateless components, eliminating all the boilerplate needed to write one. Only writing JSX in a file is enough to define a stateless component:

```
<div> Hello {this.props.name}! </div>
``` 

Using the `.html.jsx` extension can be a way to highlight the files containing stateless components written in pure JSX

See `example` folder for an example of usage. 

### Features
 * Access `props`. Eg.: `<div> Hello {this.props.name}! </div>`
 * Use of other components. Using asttribute `__jsxpath` to reference where the component is from Eg.: `<div><Konnichiwa __jsxpath="./japanese" name="World"/></div>`

### Instalation

```bash
npm install babel-stateless-jsx
```

### Usage

The plugin needs to be added alongside other plugins and presets. An example of how to set it up in package.json is below:
```javascript
"babel": {
    "presets": [
      "babel-preset-env",
      "babel-preset-react"
    ],
    "plugins": [
      "babel-stateless-jsx"
    ]
  }
```