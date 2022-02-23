import './App.css';

// React Icon Imports
import { CgArrowsExpandRight,  } from "react-icons/cg";
import { BsFillPersonFill, BsFillVolumeDownFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiImageLine, RiTimerLine, RiSoundModuleFill, RiTodoLine } from "react-icons/ri";
import { GiCrystalBall } from "react-icons/gi";

function App() {
  return (
    <div class="page">
      
      <div class="leftPage">
        <div class="mainMenu">
          <p> SIDE MENU</p>
        </div>
      </div>
      <div class="rightPage">

        <div class="topButtons">
          <div class="logoButtons">
            <p class="button">Buhay</p>
            <p class="button">3 🔥</p>
          </div>
          
          <div class="signButtons">
            <p class="button">🚀 Sign Up</p>
            <p class="button"><CgArrowsExpandRight /></p>
            <p class="button"><BsFillPersonFill /><BiDotsVerticalRounded /></p>
          </div>

        </div>
        <div class="widgets">
            <p>TOOLS</p>
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
          </div>
          <p>+</p>
          <div><hr></hr></div>
          <p>Reset</p>
        </div>
        
      </div>

    </div>
  );
}

export default App;
