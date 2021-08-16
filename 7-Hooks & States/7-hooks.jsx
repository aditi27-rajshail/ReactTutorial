import react, { useState } from 'react';
//Hooks allows us to use state without writing it in a class
const App = () => {
    const [count, setcount] = useState(0); 
    const Inc = () => {
        setcount(count + 1);
    };
    return (
        <>
            <h1>{count}</h1>
            <button onClick={Inc}>Click Me</button>
        </>
    );
};
export default App;
