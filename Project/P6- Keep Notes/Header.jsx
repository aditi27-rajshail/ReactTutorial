import React from 'react'
import logo from './logo.jpg'

const Header=()=>{
    return(
    <>
    <div className="title">
        <img src={logo} alt="logo" width="50" height="50"/>
        <h1>Take Notes</h1>
    </div>
    </>
    );
}
export default Header;
