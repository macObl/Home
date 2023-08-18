import DoomMaze from './DoomMaze';

import Audio_1 from './assets/audio/All Caps.mp3';
import Audio_2 from './assets/audio/Figaro.mp3';
import Audio_3 from './assets/audio/Meat Grinder.mp3';
import Audio_4 from './assets/audio/Doomsday.mp3';
import Audio_5 from './assets/audio/One Beer.mp3';
import Audio_6 from './assets/audio/Rapp Snitch Knishes.mp3';

import Wall from './assets/img/wall.png';
import Background from './assets/img/background.png';
import Floor from './assets/img/floor.png';

let songArr = ["MF1","MF2","MF3","MF4","MF5","MF6"];
        
const song = songArr[(Math.floor(Math.random() * songArr.length))];

function play(){
  var audio = document.getElementById(song);
  var btn = document.getElementById("demo");
  audio.volume = 0.3;
  if(audio.paused){
      audio.play();
      btn.innerHTML = "Pause"
  }
  else{
      audio.pause();
      btn.innerHTML = "Play"
  }
}

function Doom() {
    return (
        <div className=''> 
          <div className='bg-[#1e203b]'>
              <audio id="MF1" src={Audio_1} loop></audio>
              <audio id="MF2" src={Audio_2} loop></audio>
              <audio id="MF3" src={Audio_3} loop></audio>
              <audio id="MF4" src={Audio_4} loop></audio>
              <audio id="MF5" src={Audio_5} loop></audio>
              <audio id="MF6" src={Audio_6} loop></audio>
              
              <img id="texture" src={Wall} style={{display: 'none'}} />
              <img id="background" src={Background} style={{display: 'none'}} />
              <img id="floor-texture" src={Floor} style={{display: 'none'}}/>
                
              <div className="flex flex-col items-center justify-center p-5">
                <canvas id="canvas"></canvas>
                <div id='display' className='py-8'></div>
                <p className='text-[#ABB2BF] pt-10 pb-8'>(W)-Forward / (S)-Backwards / (A)-Left / (D)-Right </p>
                <button  onClick={play} type="button" id="demo" className=" focus:outline-none text-black bg-[#F5915C] hover:bg-[#b86e48] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Play</button>
              </div>
          </div>
          <DoomMaze />
        </div>
         
    );
  }
  
  export default Doom;