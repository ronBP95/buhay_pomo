import React from 'react';
import "../components/css/Timer.css"
import { BsArrowClockwise, BsGearFill, BsDash } from "react-icons/bs";


const Timer = () => {
    return (
        <div class="Timer">
            <div class="topLayer">
                <p>Timer</p>
                <p><BsDash size={25}/></p>
            </div>
            <div class="horizontal">
                <div class="midLayer">
                    <div class="clock">
                        <p>00:00</p>
                    </div>
                    <div class="clockButtons">
                        <p class="startClock">Start</p>
                        <div><BsArrowClockwise size={25}/></div>
                    </div>
                </div>
                <div class="botLayer">
                    <p>Pomodoro</p>
                    <p>Short Break</p>
                    <p>Long Break</p>
                    <p><BsGearFill /></p>
                </div>
            </div>
        </div>
    );
}

export default Timer;

