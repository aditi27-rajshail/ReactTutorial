
import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

/* JSX
JAVASCRIT XML EXTENSTION
<h1>JSX expression
React must be  in scope to use JSX- hence need to import react
For example:
ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));
ReactDOM.render(React.createElement("h1", null, "Hello World"), document.getElementById('root'));
React is used to create h1 new element */

 ReactDOM.render(
  <React.Fragment>
    <h1>Hello World</h1>
    <p>Hi  name is Aditi Rajan Khot</p>
  </React.Fragment>,
  document.getElementById('root'));

 /*  Simple JS
 var h1= document.createElement("h1")
  h1="hi world";
  document.getElementById("root").append(h1); */

/* #render element takes only one element
=>it should be wrapped in one jsx we need to wrap in single div tag
#In React v16- render() can be implemented  to return array of elements [] */

ReactDOM.render(
  [
    <h1>Hello World</h1>,
    <p>Hi my name is Aditi Khot</p>,
  ],
  document.getElementById('root'));

{/* <React.Fragments>or <></> Sugar form
extra node of div is not created,
no problem during css,
less space */}

ReactDOM.render(
  <>
    <h1>Hello World</h1>
    <p>Hi  name is Aditi Rajan Khot</p>
    <ol>
      <li>Dark</li>
      <li>Extra Circular</li>
      <li>My Holo Love</li>
      <li>My first-2 Love</li>
      <li>Mr. Robot</li>
    </ol>
  </>,
  document.getElementById('root'));
