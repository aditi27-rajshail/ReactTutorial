import react, { useState } from 'react';
const App = () => {
    const [name, setname] = useState({
        fname: "",
        lname: "",
        email: "",
        pnum: "",
    });

    const InputChange = (events) => {
        const { name, value} = events.target;
        setname = ((preVal) => {
            return {
                ...preVal,
                [name]: value
            };
        });
    };
    const Submit = (events) => {
        events.preventDefault();
        alert("your form is submitted");
    }

    return (
        <>

            <form >
                <div>
                    <h1>Hi {name.fname}{name.lname}</h1>
                    <p>{name.email}</p>
                    <p>{name.pnum}</p>
                    <input
                        type="text"
                        placeholder="Full name"
                        name='fname'
                        onChange={InputChange}
                        value={name.fname} />
                    <input
                        type="text"
                        placeholder="Password"
                        name='lname'
                        onChange={InputChange}
                        value={name.lname} />
                    <input
                        type="text"
                        placeholder="Password"
                        name='email'
                        onChange={InputChange}
                        value={name.email} />
                    <input
                        type="number"
                        placeholder="Password"
                        name='pnum'
                        onChange={InputChange}
                        value={name.pnum} />
                    <button type="submit">Click Me</button>
                </div>
            </form>

        </>

    );
}
export default App;
/* 
React uses the concept of 'controlled components' for forms
These components send any changes through the React State onChange
This ensures that React always 'owns' the state of the Form

const App = () => {
    const [cname, setname] = useState();
    const [fname, setfname] = useState();

    const [cnameq, setnameq] = useState();
    const [fnameq, setfnameq] = useState();

    const InputChange = (events) => {
        setname(events.target.value);
    }
    const Submit = (events) => {
        events.preventDefault();
        setfname(cname);
        setfnameq(cnameq);

    }
    const InputChangeq= (events) => {
        setnameq(events.target.value);
    }

    return (
        <>

            <form onSubmit={Submit}>
                <div>
                    <h1>Hi {fname} {fnameq}</h1>
                    <input
                        type="text"
                        placeholder="Full name"
                        onChange={InputChange}
                        value={cname} />
                         <input
                        type="text"
                        placeholder="Password"
                        onChange={InputChangeq}
                        value={cnameq} />
                    <button type="submit">Click Me</button>
                </div>
            </form>

        </>

    );
} */


