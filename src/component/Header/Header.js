import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='header-conteiner'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header-menu">
                    <a href="/home">Home</a>
                    <a href="/ordar">Order</a>
                    <a href="/about">About</a>
                    <a href="/contuct">Contuct</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;