import React from 'react';
import Timer from './Timer';
import './TimerBox.css';

const TimerBox = (props) => {

    return (
        <div className="timer-box-container">
            <div className="green ui buttons timer-box-item">
                <button className="ui button" onClick={props.work}>Let's work</button>
                <button className="ui button" onClick={props.shortBreak}>Short break</button>
                <button className="ui button" onClick={props.longBreak}>Long break</button>
            </div>
            <Timer time={props.time}/>
            <div className="ui icon buttons timer-box-item">
                <button className="ui button" onClick={props.start}>
                    <i className="play icon"></i>
                </button>
                <button className="ui button" onClick={props.stop}>
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
