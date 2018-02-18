import React from 'react'
import ReactDOMServer from 'react-dom/server'
import SimpleHello from '../src/SimpleHello.html.jsx'
import HelloWithProps from '../src/HelloWithProps.html.jsx'
import HelloWithDOMChildren from '../src/HelloWithDOMChildren.html.jsx'
import Greetings from '../src/Greetings.html.jsx'
import GreetingsFromAfar from '../src/GreetingsFromAfar.html.jsx'

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


it('should render a hello world div with a bit more complex structure', () => {
    let test = <HelloWithDOMChildren name="World"/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div><p>Hello World!</p><p>This is just another paragraph</p></div>")
});

it('should render a higher order component', () => {
    let test = <Greetings/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div><div>Hola World!</div></div>")
});

it('should render a higher order component with components from folders', () => {
    let test = <GreetingsFromAfar/>;

    let result = ReactDOMServer.renderToStaticMarkup(test);

    expect(result).toBe("<div><div>Konnichiwa World!</div></div>")
});