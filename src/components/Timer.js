import React from 'react';
import "../components/css/Timer.css"
import { GrPowerReset } from "react-icons/gr";

const Timer = () => {
    return (
        <div class="Timer">
            <div class="topLayer">
                <p>Timer</p>
                <p>-</p>
            </div>
            <div class="horizontal">
                <div class="midLayer">
                    <div class="clock">
                        <p>00:00</p>
                    </div>
                    <div class="clockButtons">
                        <p class="startClock">Start</p>
                        <div><GrPowerReset color="white"/></div>
                    </div>
                </div>
                <div class="botLayer">
                    <p>Pomodoro</p>
                    <p>Short Break</p>
                    <p>Long Break</p>
                    <p>wheel</p>
                </div>
            </div>
        </div>
    );
}

export default Timer;

