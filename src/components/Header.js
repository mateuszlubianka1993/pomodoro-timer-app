import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <header className="header-container">
            <div className="header-row">
                <div className="header-icon">
                    <i class="far fa-clock"></i>
                </div>
                <div className="header-text">
                    <h1>Pomodoro Timer</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
