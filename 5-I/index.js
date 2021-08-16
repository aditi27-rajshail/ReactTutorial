import React from 'react'
import ReactDOM from 'react-dom'
//import name, {mname, myFamily} from './App'
// in default import just write name
// in multiple import default element, {multiple element name}
import * as obj from './App'; 
//using wild card *--->this is method is not used often for Programming reading ability

ReactDOM.render(
  <>
  <ol>
    <li>{obj.default}</li>
    <li>{obj.mname}</li>
    <li>{obj.myFamily()}</li>
  </ol>
  </>
  ,
  document.getElementById('root')

);
/* ReactDOM.render(
  <>
  <ol>
    <li>Aditi</li>
    <li>{name}</li>
    <li>{mname}</li>
    <li>{myFamily()}</li>
  </ol>
  </>
  ,
  document.getElementById('root')

); */