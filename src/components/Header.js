import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <header className="header-container">
            <div className="header-row">
                <div className="header-icon">
                    <i className="far fa-clock green-text"></i>
                </div>
                <div className="header-text">
                    <h1><span className="green-text">P</span>omodoro <span className="green-text">T</span>imer</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
