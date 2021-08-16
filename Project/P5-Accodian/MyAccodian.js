import React, { useState } from 'react'
const MyAccodian=({que, ans})=>{
    const [show, setShow]= useState(false);
    const changevalue=()=>{
        setShow(!show);
    }
    return(
        <>
        <div className="main-heading">
            <p onClick={changevalue}>{show? "-" : "+"}</p>
            <h3>{que}</h3>
        </div>
        {show && <p className="answers">{ans}</p>}
        </>
    )
}
/*
 {show && <p className="answers">{ans}</p>} if show is true only then show my answers
 onclicking setshow becomes true which was initially false
 {show? "-" : "+"} id shows is true--->- show data
 else shows is false--->+ minimize data
 
const MyAccodian=(props)=>{
    return(
        <>
        <p>{props.que}</p>
        <p>{props.ans}</p>
        </>
    )
} */



export default MyAccodian;