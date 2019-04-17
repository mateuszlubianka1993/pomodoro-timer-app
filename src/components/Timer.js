import React from 'react';
import './Timer.css';

const Timer = (props) => {
    let allTime;
    let minutes;
    let sec;
    
    if(props.time > 0) {
        allTime = props.time;
        minutes = Math.floor(allTime/60)
        sec = allTime - minutes*60;
    } else if (props.time === 0) {
        minutes = '00';
        sec = '00';
    }
        
    return (
        <div className="timer-container">
            <div className="time-display-box">{minutes}:{sec}</div>
        </div>
    );
};

export default Timer;
