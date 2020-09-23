import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    return (
        <div className='headerArea'>
            <nav>
                <a href="/home">Home</a>
                <a href="/login">Login</a>
                <a href="/about">About</a>
                <a href="/room">Room</a>
                <a href="/">{loggedInUser.email}</a>
            </nav>
        </div>
    );
};

export default Header;