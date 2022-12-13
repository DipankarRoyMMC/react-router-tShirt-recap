import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const linkStyle = ({ isActive }) => {
        return {
            color: isActive ? 'red' : '#333',
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? '500' : 'normal'
        }
    }

    return (
        <div>
            <h1 className='heading-title'>Welcome to Our T-Shirt Online Shop</h1>
            <nav>
                <NavLink to='/' style={linkStyle}>Home </NavLink>
                <NavLink to='/orderreview' style={linkStyle}>Order Review</NavLink>
                <NavLink to='/grandpa' style={linkStyle}>Grandpa</NavLink>
            </nav>
        </div>
    );
};

export default Header;