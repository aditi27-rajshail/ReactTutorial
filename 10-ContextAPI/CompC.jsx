import React from 'react';
import { Fname, Lname } from './App';
/* Using Cotext results to combulsive process and similar to callback hell */

const CompC = () => {
    return (
        <>
            <Fname.Consumer>
                {(namef) => {
                    return (
                        <Lname.Consumer>
                            {(namel) => {
                                return (
                                    <>
                                        <h1>I am C-----{namef}</h1>
                                        <h1>I am C-----{namel}</h1>
                                    </>
                                )
                            }}
                        </Lname.Consumer>
                    );
                }}
            </Fname.Consumer>
        </>
    );
}
export default CompC;