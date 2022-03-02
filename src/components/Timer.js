import React, { useState, useEffect } from 'react';
import "../components/css/Timer.css"
import { BsArrowClockwise, BsGearFill, BsDash } from "react-icons/bs";

const Alert = () => {
    alert("I'm sorry but this element is currently under construction!")
}

const Pomo = (props: any) => {
    const { pomoMinutes = 45, pomoSeconds = 0 } = props;
    const [minutes, setMinutes] = useState(pomoMinutes);
    const [seconds, setSeconds] = useState(pomoSeconds);
    const [isActive, setisActive] = useState(false)

    function toggleOn() {
        setisActive(!isActive)
    }

    useEffect(() => {
        if (isActive) {
            let myInterval = setInterval(() => {
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
                {minutes === 0 && seconds === 0
                    ? "DONE!"
                    : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
            <div class="clockButtons">
                <p class="startClock" onClick={toggleOn}>{isActive ? 'Pause' : 'Start'}</p>
                {/* <div><BsArrowClockwise size={25} /></div> */}
            </div>
        </div>
    )
}

const ShortBreak = (props: any) => {
    const { pomoMinutes = 5, pomoSeconds = 0 } = props;
    const [minutes, setMinutes] = useState(pomoMinutes);
    const [seconds, setSeconds] = useState(pomoSeconds);
    const [isActive, setisActive] = useState(false)

    function toggleOn() {
        setisActive(!isActive)
    }

    useEffect(() => {
        if (isActive) {
            let myInterval = setInterval(() => {
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
                {minutes === 0 && seconds === 0
                    ? "DONE!"
                    : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
            <div class="clockButtons">
                <p class="startClock" onClick={toggleOn}>{isActive ? 'Pause' : 'Start'}</p>
                <div><BsArrowClockwise size={25} /></div>
            </div>
        </div>
    )
}

const LongBreak = (props: any) => {
    const { pomoMinutes = 15, pomoSeconds = 0 } = props;
    const [minutes, setMinutes] = useState(pomoMinutes);
    const [seconds, setSeconds] = useState(pomoSeconds);
    const [isActive, setisActive] = useState(false)

    function toggleOn() {
        setisActive(!isActive)
    }

    useEffect(() => {
        if (isActive) {
            let myInterval = setInterval(() => {
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
                {minutes === 0 && seconds === 0
                    ? "DONE!"
                    : <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
            <div class="clockButtons">
                <p class="startClock" onClick={toggleOn}>{isActive ? 'Pause' : 'Start'}</p>
                <div><BsArrowClockwise size={25} /></div>
            </div>
        </div>
    )
}

const Timer = () => {
    const [pomo, setPomo] = useState(true)
    const [short, setShort] = useState(false)
    const [long, setLong] = useState(false)
    const [settings, setSettings] = useState(false)

    const pomoOn = () => {
        setShort(false)
        setPomo(true)
        setLong(false)
    }

    const shortOn = () => {
        setShort(true)
        setPomo(false)
        setLong(false)
    }
    
    const longOn = () => {
        setLong(true)
        setShort(false)
        setPomo(false)
    }

    const settingsOn = () => {
        setSettings(!settings)
    }

    // Timer Display Hide Function
    return (
        <div class="Timer">
            <div class="topLayer">
                <p>Timer</p>
                {/* <p id="minIcon"><BsDash size={25} /></p> */}
            </div>
            <div class="horizontal">
                <div>
                    {pomo ? <Pomo/> : null}
                    {short ? <ShortBreak /> : null}
                    {long ? <LongBreak /> : null}
                </div>
                <div class="botLayer">
                    <p onClick={pomoOn}>Pomodoro</p>
                    <p onClick={shortOn}>Short Break</p>
                    <p onClick={longOn}>Long Break</p>
                    {/* <p onClick={settingsOn}><BsGearFill /></p> */}
                </div>
                {settings ?                 
                <div class="timerSettings">
                    <div class="settingsCard">
                        <p>Pomo</p>
                        <input type="number"></input>
                    </div>
                    <div class="settingsCard">
                        <p>Short Break</p>
                        <input type="number"></input>
                    </div>
                    <div class="settingsCard">
                        <p>Long Break</p>
                        <input type="number"></input>
                    </div>
                </div>
                : null }

            </div>
        </div>
    );
}

export default Timer;

