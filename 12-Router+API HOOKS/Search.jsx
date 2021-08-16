import React, { useState } from 'react'
import Searchresult from './Searchresult';

const Search = () => {
    const [img ,setimg]=useState(" ");
    
    const Change=(events)=>{
        const data=events.target.value;
        setimg(data);
       
    }
    return (
        <>
            <h1>hi Search Page</h1>
            <input type="text" placeholder="Enter detailes" value={img} onChange={Change} />
            <br/>
            <Searchresult name={img}/>
            
        </>
    )
}
export default Search;
