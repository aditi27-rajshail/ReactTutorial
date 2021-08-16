import react, { useState } from 'react';
const App= ()=>{


    let time= new Date().toLocaleTimeString();
    const [ctime, setctime]=useState(time);
    const UpdateT=()=>{
        time= new Date().toLocaleTimeString();
        setctime(time);
    }
    setInterval(UpdateT, 1000)
    
    return(
        <h1>{ctime}</h1>
    );
}
export default App;