import React from 'react'

const Searchresult = (props) => {
    const img=`https://source.unsplash.com/600x400/?${props.name}`;
    return (
           <img src= {img} alt="imgbn"/>
    )
}
export default Searchresult;
