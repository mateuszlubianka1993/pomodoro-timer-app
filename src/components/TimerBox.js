import React from 'react';
import Timer from './Timer';
import './TimerBox.css';

const TimerBox = (props) => {

    return (
        <div className="timer-box-container">
            <div className="green ui buttons timer-box-item">
                <button className="ui button" onClick={props.work}>Work</button>
                <button className="ui button" onClick={props.shortBreak}>Short</button>
                <button className="ui button" onClick={props.longBreak}>Long</button>
            </div>
            <div className="timer-box-item">
                <Timer time={props.time}/>
            </div>
            <div className="ui icon buttons timer-box-item">
                <button className="ui button green" onClick={props.start}>
                    <i className="play icon"></i>
                </button>
                <button className="ui button green" onClick={props.stop}>
                    <i className="pause icon"></i>
                </button>
            </div>
        </div>
    );
};

export default TimerBox;
