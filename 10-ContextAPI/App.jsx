import React, { createContext } from 'react';
/* React Context API is a way to create global variables 
"prop drilling" Context is a simpler, lighter solution to using Redux for state management.
Provider---provides data
Consumer---get data(must be passed as a function)
*/
import CompA from './CompA';
const Fname =createContext();
const Lname =createContext()
const App=()=>{
    return(
        <>
        <Fname.Provider value={" secret value from A"}>
        <Lname.Provider value={"  2nd secret value from A"}>
        <CompA />
        </Lname.Provider>
        </Fname.Provider>
        </>
    )
}
export default App;
export {Fname, Lname};