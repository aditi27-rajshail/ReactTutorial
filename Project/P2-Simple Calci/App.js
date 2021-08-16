import React from 'react';
import {add, sub, divide, multiply} from './Calci';
function App() {
    return (
        <>
            <ol>
                <li>Add of two number {add(3, 5)}</li>
                <li>Sub of two number {sub(3, 5)}</li>
                <li>Divide of two number {divide(5, 3)}</li>
                <li>Multiply of two number {multiply(3, 5)}</li>

            </ol>
        </>

    );
}
export default App;