import React from 'react'
import { NavLink } from 'react-router-dom';
 const Navbar = () => {
    return (
        <>
        <div className="menue_style">
        <NavLink exact activeClassName="active_class" to ="./">About Us</NavLink>
        <NavLink exact activeClassName="active_class" to ="/contact">Contact Us</NavLink>
        <NavLink exact activeClassName="active_class" to ="./services">Services</NavLink>
        <NavLink exact activeClassName="active_class" to ="./user/UDfname/UDlname">User</NavLink>
        <NavLink exact activeClassName="active_class" to ="./search">Search</NavLink>
        </div>
        </>
        
    )
}
export default Navbar;
