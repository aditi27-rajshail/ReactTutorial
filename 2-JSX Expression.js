
import React from 'react';
import ReactDOM from 'react-dom';

/* ReactDOM.render(
  <h1>My name is amogh</h1>,
  document.getElementById('root')
); */

// USE HTML in JS--> JSX
// USE JS IN HTML IN JS --> {}

const ffname = "Aditi";
ReactDOM.render(
    <>
        <h1>My name is {ffname} Khot</h1>
        <p> My phone is is {10 + 20}</p>
    </>,
    document.getElementById('root')
);

//WE cannot use statements in JS IN JSX.

//ES6 Template Literates

const fname = "Aditi";
const lname = "Khot";
const currentdate = new Date().toLocaleDateString();
const currenttime = new Date().toLocaleTimeString();
ReactDOM.render(
    <>
        <h1>My name is {fname} {lname}</h1>
        <h1>My name is {fname + lname}</h1>
        <h1>My name is {fname + " " + lname}</h1>
        <h1>{`My name is ${fname} ${lname}`}</h1>
        <h1>{`today time is ${currentdate}`}</h1>
        <h1>{`today time is ${currenttime}`}</h1>
        <p> My phone is is {10 + 20}</p>
    </>,
    document.getElementById('root')
);