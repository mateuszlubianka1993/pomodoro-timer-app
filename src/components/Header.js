import React from 'react';

const Header = () => {

    return (
        <header className="header-container ui centered grid">
            <div className="ui centered row header-row">
                <div className="column">
                    <i class="far fa-clock"></i>
                </div>
                <div className="six wide column">
                    <h1>Pomodoro Timer</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
