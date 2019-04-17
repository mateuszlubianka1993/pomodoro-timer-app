import React from 'react';

const Timer = (props) => {
    
        let allTime = props.time;
        let minutes = Math.floor(allTime/60)
        let sec = allTime - minutes*60;
    return (
        <div className="timer-container">
            <div>{minutes}:{sec}</div>
        </div>
    );
};

export default Timer;
