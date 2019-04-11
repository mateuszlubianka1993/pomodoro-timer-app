import React from 'react';
import './TimerBox.css';

const TimerBox = () => {

    return (
        <div className="timer-box-container">
            <div className="green ui buttons timer-box-item">
                <button className="ui button">Let's work</button>
                <button className="ui button">Short break</button>
                <button className="ui button">Long break</button>
            </div>
            <div className="timer-box-item">Timer</div>
            <div className="ui icon buttons timer-box-item">
                <button className="ui button">
                    <i className="play icon"></i>
                </button>
                <button className="ui button">
                    <i className="pause icon"></i>
                </button>
                <button className="ui button">
                    <i className="history icon"></i>
                </button>
            </div>
        </div>
    );
};

export default TimerBox;
