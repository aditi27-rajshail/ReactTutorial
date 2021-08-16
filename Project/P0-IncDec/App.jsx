import react, { useState } from 'react';
const App = () => {
    const [num, setnum] = useState(0);
    const Incre = () => {
        setnum(num + 1);
    }
    const Decre = () => {
        if (num == 0)
            alert("Sorry 0 limit reached");
        else
            setnum(num - 1);

    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="button_div">
                        <button onClick={Incre}>Increment</button>
                        <button onClick={Decre}>Decrement</button>
                    </div>
                </div>
            </div>
        </>

    );
}
export default App;