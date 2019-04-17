import React from 'react';
import './Timer.css';

const Timer = (props) => {
    
        let allTime = props.time;
        let minutes = Math.floor(allTime/60)
        let sec = allTime - minutes*60;
    return (
        <div className="timer-container">
            <div className="time-display-box">{minutes}:{sec}</div>
        </div>
    );
};

export default Timer;
