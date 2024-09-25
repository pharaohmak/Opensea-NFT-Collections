import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/header/logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

const Header = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);  // Trigger the search function passed as a prop
        }
    };

    return (
        <div className='header'>
            <div className='logoContainer'>
                <a href='/'>
                    <img src={logo} className='punkLogo' alt='CryptoPunk Logo' />
                </a>
            </div>

            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt='Search Icon' />
                </div>
                <input
                    className='searchInput'
                    placeholder='Collection, item or user ...'
                    value={searchQuery}
                    onChange={handleSearch}  // Capture input changes and trigger search
                />
            </div>

            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} alt='Theme Switch Icon' />
                </div>
            </div>

            <div className='loginButton'>GET IN</div>
        </div>
    );
};

export default Header;