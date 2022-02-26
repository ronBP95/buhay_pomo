import React from 'react';

// Icon Imports
import { GiCrystalBall } from "react-icons/gi";
import { RiImageLine, RiTimerLine, RiSoundModuleFill, RiTodoLine } from "react-icons/ri";
import { BsFillVolumeDownFill } from "react-icons/bs";

// CSS Import
import "../components/css/Widgets.css"

const Reset = () => {
    console.log("clicked")
    window.location.reload();
}

const Widgets = () => {
    return (
        <div class="widgets">
            <p id="widgetHeader">TOOLS</p>
          <div class="widgetCard">
            <div class="icon"><RiImageLine size={25}/></div>
            <p>Spaces</p>
          </div>
          <div class="widgetCard">
            <div class="icon"><RiTimerLine size={25}/> </div>
            <p>Timer</p>
          </div>
          <div class="widgetCard">
          <div class="icon"><BsFillVolumeDownFill size={25} /> </div>    
            <p>Music</p>
          </div>
          <div class="widgetCard">
          <div class="icon"><RiSoundModuleFill size={25} /> </div> 
            <p>Sounds</p>
          </div>
          <div class="widgetCard">
          <div class="icon"><RiTodoLine size={25} /> </div> 
          <p>To-Do</p>
          </div>
          <div class="widgetCard">
          <div class="icon"><GiCrystalBall size={25} /> </div> 
            <p>Fortune</p>
            <p id="widgetAdd">+</p>
          </div>
          <div><hr></hr></div>
          <p id="widgetReset" onClick={Reset}>Reset</p>

        </div>
    );
}

export default Widgets;
