import './App.css';
import Draggable from "react-draggable"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useState } from 'react'

// React Icon Imports
import { CgArrowsExpandRight,  } from "react-icons/cg";
import { BsLink45Deg, BsFillPersonFill, BsFillVolumeDownFill, BsDash, BsArrowLeft } from "react-icons/bs";
import { BiDotsVerticalRounded, BiVolumeMute } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineHeart, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { ImMenu3 } from "react-icons/im"
import { GiCrystalBall } from "react-icons/gi";
import { RiImageLine, RiTimerLine, RiSoundModuleFill, RiTodoLine } from "react-icons/ri";

// Component Imports
import Timer from "../src/components/Timer"

function App() {
  const handle = useFullScreenHandle();
  const [spaces, setSpaces] = useState(true)
  const [timer, setTimer] = useState(false)
  const [url, setUrl] = useState("")

  // Reset Function for Widgets Menu
  const Reset = () => {
    console.log("clicked")
    window.location.reload();
  }

  const YoutubeEmbed = ({}) => {
    return <iframe src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  }

  function load () {
      document.getElementById("overlay").style.visibility = "visible"
    const hideLoad = setTimeout(() => {
      console.log("Loading Screen Hidden")
      document.getElementById("overlay").style.visibility = "hidden"
    }, 2000);
    return () => hideLoad();
  }

  // Backgrounds

  const spaceBackground = () => {
    load()
    setUrl("https://www.youtube.com/embed/atjAURP2_9o?autoplay=1&loop=1&autopause=0&mute=1&controls=0")
  }

  const libraryBackground = () => {
    load()
    setUrl("https://www.youtube.com/embed/YQc4WT0yDH4?autoplay=1&loop=1&autopause=0&mute=1&controls=0&start=240")
  }

  const lofiBackground = () => {
    load()
    setUrl("https://www.youtube.com/embed/lTRiuFIWV54?autoplay=1&loop=1&autopause=0&mute=1&controls=0&start=18")
  }

  const animeBackground = () => {
    load()
    setUrl("https://www.youtube.com/embed/5wRWniH7rt8?autoplay=1&loop=1&autopause=0&mute=1&controls=0&start=150")
  }

  const fantasyBackground = () => {
    load()
    setUrl("https://www.youtube.com/embed/rJTw_LmDS4Y?autoplay=1&loop=1&autopause=0&mute=1&controls=&0start=1")
  }

  const movieBackground = () => {
    load()
    setUrl("https://www.youtube.com/embed/OhBo1A8atuA?autoplay=1&loop=1&autopause=0&mute=1&controls=0&start=225")
  }

  const studyBackground = () => {
    load()
    setUrl("https://www.youtube.com/embed/1ex_bNIFR1A?autoplay=1&loop=1&autopause=0&mute=1&controls=0&start=50")
  }

  const animalsBackground = () => {
    load()
    setUrl("https://www.youtube.com/embed/khCnS3KC3eY?autoplay=1&loop=1&autopause=0&mute=1&controls=0&start=35")
  }
  
  
  return (
    <FullScreen handle={handle}>
    <div class="videoCont">
      <div id="backgroundVideo">
      <YoutubeEmbed />
      </div>
    </div>

    <div id="overlay">Loading...</div>

    <div id="page">
      {spaces ? 
      <div class="leftPage">
        <div class="mainMenu">
          <div class="leftTopMenu">
            <div class="exploreRow"> 
              <div class="exploreButton">
              <div id="exploreIcon"><BsArrowLeft /></div> 
              <div>See Original</div>
              </div> 
              <div class="minIcon" onClick={() => setSpaces(!spaces)}><BsDash  size={25}/></div>
            </div>

            <div className="shuffleHeader">
              <h4>Shuffle Spaces</h4>
              {/* <div class="shuffleArrows">
              <IoIosArrowBack size={18}/>
              <IoIosArrowForward size={18}/>
              </div> */}
            </div>

            <div class="underShuffle">
              <p>Click an emoji to switch between content</p>
            </div>

            <div class="spacesMenu">
              <div class="spacesTop">
                <p class="spaceIcon" onClick={spaceBackground}>🪐</p>
                <p class="spaceIcon" onClick={libraryBackground}>📚</p>
                <p class="spaceIcon" onClick={lofiBackground}>🎤</p>
                <p class="spaceIcon" onClick={animeBackground}>🧠</p>
              </div>
              <div class="spacesBot">
                <p class="spaceIcon" onClick={fantasyBackground}>🔮</p>
                <p class="spaceIcon" onClick={movieBackground}>🎟️</p>
                <p class="spaceIcon" onClick={studyBackground}>🖥️</p>
                <p class="spaceIcon" onClick={animalsBackground}>🐕</p>
              </div>
            </div>

            <div class="volumeControl">
              
              <div class="volumeHeader">
                <div class="volumeName">
                  <p id="volumeTitle">Video Title Goes Here</p>
                  <p id="shareSpace">Volume Control</p>
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
                  <p>Account Name Goes Here</p>
                  <div class="infoSocials">
                    {/* <p><AiFillInstagram size={20}/></p>
                    <p><BsLink45Deg size={20}/></p> */}
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
      : null}

      <div class="rightPage">

        <div class="topButtons">
          <div class="logoButtons">
            <p class="button">Buhay</p>
            <p class="button">3 🔥</p>
          </div>
          
          <div class="signButtons">
            <p class="button">🚀 Sign Up</p>
            <p class="button" onClick={handle.enter}><CgArrowsExpandRight /></p>
            <p class="button"><BsFillPersonFill /><BiDotsVerticalRounded /></p>
          </div>

        </div>

        {/* Widgets Menu */}
        <div class="widgets">
            <p id="widgetHeader">TOOLS</p>
          <div class="spacesCard" onClick={() => setSpaces(!spaces)}>
            <div class="icon"><RiImageLine size={25}/></div>
            <p>Spaces</p>
          </div>
          <div class="timerCard">
            <div class="icon" onClick={() => setTimer(!timer)}><RiTimerLine size={25}/> </div>
            <p>Timer</p>
          </div>
          <div class="musicCard">
          <div class="icon"><BsFillVolumeDownFill size={25} /> </div>    
            <p>Music</p>
          </div>
          <div class="soundsCard">
          <div class="icon"><RiSoundModuleFill size={25} /> </div> 
            <p>Sounds</p>
          </div>
          <div class="todoCard">
          <div class="icon"><RiTodoLine size={25} /> </div> 
          <p>To-Do</p>
          </div>
          <div class="fortuneCard">
          <div class="icon"><GiCrystalBall size={25} /> </div> 
            <p>Fortune</p>
            <p id="widgetAdd">+</p>
          </div>
          <div><hr></hr></div>
          <p id="widgetReset" onClick={Reset}>Reset</p>
        </div>
        
        {/* Timer Widget */}
        {timer ?           
        <Draggable>     
          <div>
          <Timer />
          </div> 
        </Draggable>
        : null}



      </div>
    </div>
    </FullScreen>
  );
}

export default App;
