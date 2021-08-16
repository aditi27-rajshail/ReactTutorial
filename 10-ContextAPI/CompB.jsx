import React from 'react';
import CompC from './CompC';
import { Fname, Lname } from './App';
import { useContext } from 'react';
//useContext is better version of createContext

const CompB = () => {
    const namef = useContext(Fname)
    const namel = useContext(Lname)
    return (
        <>
            <h1>I am B-----{namef}</h1>
            <h1>I am B-----{namel}</h1>

        </>
    );
}
export default CompB;

/* const CompB=()=>{
    return(
        <>

        <CompC/>
        </>
    );
}
export default CompB; */