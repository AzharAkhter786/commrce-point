import React, { useState } from 'react';


export const SideNavBar=()=>{
    const [openSideNav,setOpenSideNav]=useState(false);

    const toggleSidebar=(event)=>{
    event.preventDefault();
    
    setOpenSideNav(!openSideNav)
    }
    let sideClass= openSideNav ? 'open':'close';


    return(
        <>
<div className={`cart-side-nav-bar ${sideClass}`} id="cart-side-nav-bar">
        <a href="#home" className="closebtn" onClick={toggleSidebar}>&times;</a>
        <a href="#home">About</a>
        <a href="#home">Services</a>
        <a href="#home">Clients</a>
        <a href="#home">Contact</a>
    </div>

    <span onClick={toggleSidebar}>&#9776; open</span>
        </>
    );
}