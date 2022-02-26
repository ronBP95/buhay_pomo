import React,  { useState, useEffect } from 'react';
import "../components/css/Timer.css"
import { BsArrowClockwise, BsGearFill, BsDash } from "react-icons/bs";

const Alert = () => {
    alert("I'm sorry but this element is currently under construction!")
}

const Pomo = (props:any) => {
    const {initialMinute = 45, initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [ seconds, setSeconds ] = useState(initialSeconds);
    const [ isActive, setisActive] = useState(false)

    function toggleOn () {
        setisActive(!isActive)
    }

    useEffect(() => {
        if (isActive) {
            let myInterval = setInterval (() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000)
            return () => {
                clearInterval(myInterval)
            };  
        }
    });
    return (
        <div class="timerWidget">
        <div class="clock">
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
        <div class="clockButtons">
            <p class="startClock" onClick={toggleOn}>{isActive ? 'Pause' : 'Start'}</p>
            <div><BsArrowClockwise size={25}/></div>
        </div>
        </div>
    )
}

const Timer = () => {

    // Timer Display Hide Function
        return (
            <div class="Timer">
                <div class="topLayer">
                    <p>Timer</p>
                    <p id="minIcon"><BsDash size={25}/></p>
                </div>
                <div class="horizontal">
                    <div>
                        <Pomo />
                    </div>
                    <div class="botLayer">
                        <p onClick={Alert}>Pomodoro</p>
                        <p>Short Break</p>
                        <p>Long Break</p>
                        <p><BsGearFill /></p>
                    </div>
                </div>
            </div>
        );
}

export default Timer;

