import react, { useState } from 'react'
 const App=()=>{
    let time = new Date().toLocaleTimeString();
    const [ctime, setcTime]=useState(time);
    const GetTime=()=>{
        time= new Date().toLocaleTimeString();
        setcTime(time);
    }
    return(
     <>
     <h1>{ctime}</h1>
     <button onClick={GetTime}> Get the Time </button>
     </>
    );
 }
 export default App;