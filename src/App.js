import './App.css';
import Draggable from "react-draggable"

// React Icon Imports
import { CgArrowsExpandRight,  } from "react-icons/cg";
import { BsLink45Deg, BsFillPersonFill, BsFillVolumeDownFill, BsDash, BsArrowLeft } from "react-icons/bs";
import { BiDotsVerticalRounded, BiVolumeMute } from "react-icons/bi";
import { RiImageLine, RiTimerLine, RiSoundModuleFill, RiTodoLine } from "react-icons/ri";
import { GiCrystalBall } from "react-icons/gi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineHeart, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { ImMenu3 } from "react-icons/im"

// Component Imports
import Timer from "../src/components/Timer"


function App() {
  return (
    <div class="page">
      
      <div class="leftPage">
        <div class="mainMenu">
          <div class="leftTopMenu">
            <div class="exploreRow"> 
              <div class="exploreButton">
              <div id="exploreIcon"><BsArrowLeft /></div> 
              <div>See Original</div>
              </div> 
              <div class="minIcon"><BsDash  size={25}/></div>
            </div>

            <div className="shuffleHeader">
              <h4>Shuffle Spaces</h4>
              <div class="shuffleArrows">
              <IoIosArrowBack size={18}/>
              <IoIosArrowForward size={18}/>
              </div>
            </div>

            <div class="underShuffle">
              <p>Click an emoji multiple times for more content</p>
            </div>

            <div class="spacesMenu">
              <div class="spacesTop">
                <p class="spaceIcon">🪐</p>
                <p class="spaceIcon">📚</p>
                <p class="spaceIcon">🎤</p>
                <p class="spaceIcon">🧠</p>
              </div>
              <div class="spacesBot">
                <p class="spaceIcon">🔮</p>
                <p class="spaceIcon">🎟️</p>
                <p class="spaceIcon">🖥️</p>
                <p class="spaceIcon">🐕</p>
              </div>
            </div>

            <div class="volumeControl">
              
              <div class="volumeHeader">
                <div class="volumeName">
                  <p id="volumeTitle">props.title</p>
                  <p id="shareSpace">Share Space</p>
                </div>  

                <div class="volumeIcons">
                  <div id="vIcon1"><AiOutlineHeart size={25}/></div>
                  <div id="vIcon2"><ImMenu3 size={25}/></div>
                </div>
              </div>

              <div class="volumeFooter">
                <div><BiVolumeMute size={25}/></div>
                {/* Volume Full is commented out until state is built out */}
                {/* <div><BiVolumeFull /></div> */}
                <div id="volumeHR"><hr></hr></div>
              </div>

              <div class="spaceInfo">
                <div class="imageCircle">
                  <div class="infoImg"></div>
                </div>
                <div class="infoCard">
                  <p>props.spaceName</p>
                  <div class="infoSocials">
                    <p><AiFillInstagram size={20}/></p>
                    <p><BsLink45Deg size={20}/></p>
                    <p><AiFillYoutube size={20}/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
            {/* <div class="menuFooter">
              <div class="footerCard">
                <p class="footerButtons"><BsShareFill size={12}/></p>
                <p class="footerButtons">🎥 Showcase</p>
                <p class="footerButtons">?</p>
              </div>
            </div> */}

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

        <Draggable>
        <div>
          <Timer />
        </div>
        </Draggable>

      </div>
    </div>
  );
}

export default App;
