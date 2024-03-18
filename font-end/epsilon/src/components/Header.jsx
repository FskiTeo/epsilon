import React, { useState } from 'react';
import '../css/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (route) => {
        navigate(route);
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={() => handleMenuItemClick('/')}>Home</li>
                    <li onClick={() => handleMenuItemClick('/Module')}>Module</li>
                    <li onClick={() => handleMenuItemClick('/Module')}>Add Module</li>
                </ul>
            </nav>
            <button className="menu-toggle" onClick={handleMenuToggle}>
                {isMenuOpen ? 'Close' : 'Menu'}
            </button>
        </header>
    );
};

export default Header;
