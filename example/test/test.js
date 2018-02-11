import React from 'react'
import ReactDOMServer from 'react-dom/server'
import SimpleHello from '../src/SimpleHello.html.jsx'
import HelloWithProps from '../src/HelloWithProps.html.jsx'

it('should render a hello world div', () => {
    let test = <SimpleHello/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div>Hello World!</div>")
});


it('should render a hello world div with the name coming from props', () => {
    let test = <HelloWithProps name="World"/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div>Hello World!</div>")
});
