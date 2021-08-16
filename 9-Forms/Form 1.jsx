import react, { useState } from 'react';
const App = () => {
    const [cname, setname] = useState();
    const [fname, setfname] = useState();

    const InputChange = (events) => {
       
        setname(events.target.value);
    }
    const Submit = (events) => {
        events.preventDefault(); //In form tag the value passed gets refreshed but on using preventDefault-default action normally taken by the implementation as a result of the event will not occur
        setfname(cname);
    }

    return (
        <>

            <form onSubmit={Submit}>
                <div>
                    <h1>Hi {fname}</h1>
                    <input
                        type="text"
                        placeholder="Full name"
                        onChange={InputChange}
                        value={cname} />
                    <button type="submit">Click Me</button>
                </div>
            </form>

        </>

    );
}
export default App;
/*
1)controlled components---an inout form element that is controlled by React
2)Uncontrolled components
const App=()=>{
    const [cname, setname]=useState();
    const [fname, setfname]=useState();

    const InputChange=(events)=>{
        setname(events.target.value);
    }
    const Submit=()=>{
        setfname(cname);
    }


   return(
       <>
       <div>
           <h1>Hi {fname}</h1>
           <input
           type="text"
           placeholder="Full name"
           onChange={InputChange}
           value={cname} />
           <button onClick={Submit}>Click Me</button>
       </div>
       </>

   );
} */

