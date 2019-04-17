import React from 'react';

const Timer = (props) => {
    
    return (
        <div className="timer-container">
            <div>{props.time}</div>
        </div>
    );
};

export default Timer;
