import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div id="navbar-items">
            <div class="empty-space"></div>
            <h4><NavLink className='fixed-link' id='home-btn' to="/">Home</NavLink></h4>
            <h4><NavLink className='fixed-link' id='contact-btn' to="/contact">Contact</NavLink></h4>
            <div class="empty-space"></div>
        </div>
    );
}

export default NavBar