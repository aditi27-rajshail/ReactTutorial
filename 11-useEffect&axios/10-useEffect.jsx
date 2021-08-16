import React, { useEffect, useState } from 'react';
//useEffect tell React that your component needs to do something after render.
const App =()=>{
    
    const [num,setnum]=useState(0);
    const [nums,setnums]=useState(0);
    /* useEffect(()=>{
        alert("I am clicked");
    }, []) *///when passing empty array it is rendered only once(when refereshed)
    useEffect(()=>{
        alert(`I am clicked ${num}`);
        document.title=`I am clicked ${num}`;
    }, [num])


    return(
        <>
        <h1>{num}</h1>
        <button onClick ={()=>setnum(num+1)}>Click ME</button>
        <h1>{nums}</h1>
        <button onClick ={()=>setnums(nums+1)}>Click ME</button>
        </>
        
    )
}
export default App;