import React, { useEffect, useState } from 'react'
import axios from 'axios';
const CompA = () => {
    const [num, setnum]=useState();
    const [name, setname]=useState();
    const [power, setpower]=useState();
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name);
            setpower(res.data.height);
        }
       getData();
    });
    return (
        <>
        <h1>You choose {num}</h1>
        <h1>My name is {name}</h1>
        <h1>My height is {power} cm</h1>
        <select value={num} onChange={(event)=>{
          setnum(event.target.value);
        }}>
            <option value="25">25</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">5</option>
        </select>
        </>
    )
}
export default CompA;
