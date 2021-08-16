import React from 'react';
let num1,num2;
function add(num1,num2){
  return num1 +num2;
}
function sub(num1,num2){
    return num1 -num2;
  }
  function divide(num1,num2){
    let div= num1 /num2;
    div =div.toFixed(2);
    return div;
  }

  function multiply(num1,num2){
    return num1 *num2;
  }
export  {add, sub, divide, multiply};