import React from 'react';
import './header.css';
import Logo from './image/logo.jpeg';

const Header =()=>{
    return(
        <header className='header'>
            <div className="logo">
                <img src={Logo} alt='Logo' />
            </div>
            <h1>Student Management</h1>
        </header>
    );
}
export default Header;