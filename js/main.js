const imgBox = document.getElementById('imgBox');
//const imageBox = document.getElementsByClassName('img-box');
//console.log(imageBox);
const card = document.getElementById('content-card');
const swapImg = document.getElementById('swapImg');

let rotation = false;
let angle = 0;

console.log(card);

function rotateImg() {
  /**
  angle += 45;
  
  if (angle >= 360) {
    angle = 0;
  }
  
  swapImg.style.transform = `rotate(${angle}deg)`;**/
  if(rotation) {
    swapImg.style.animation = '';
  } else {
    swapImg.style.animation = "invert 10s infinite, spin 20s linear infinite";
  }
  
  rotation = !rotation;
}

imgBox.addEventListener("click",  rotateImg);

const audioPlayer = document.getElementById("audioPlayer");
const playButtonImage = document.getElementById("playButtonImg");
const playButton = document.getElementById("playButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const titleCard = document.getElementById("track-title");
const descriptionCard = document.getElementById("track-description");
let audioIndex = 0;

function changeBgImg(index) {
  imgBox.style.backgroundImage = `url(${imageList[index]})`;
  titleCard.textContent = titleList[index];
  descriptionCard.textContent = titleDescription[index];
}


function playAudio() {
  
    if (audioPlayer.paused) {
        playButtonImage.src = "img/pause.png";
        changeBgImg(audioIndex);
        loadAudio(audioIndex);
        
        
        audioPlayer.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    } else {
        playButtonImage.src = "img/play.png";
       
        audioPlayer.pause();
    }
}

function loadAudio(index) {
    audioPlayer.src = audioList[index];
    audioPlayer.load(); // Load the new audio source
    audioPlayer.addEventListener("canplaythrough", () => {
        // Ensure the audio is ready before playing
        //audioPlayer.play();
    });
}

playButton.addEventListener("click", playAudio);
nextButton.addEventListener("click", () => {
    audioIndex = (audioIndex + 1) % audioList.length;
    audioPlayer.pause();
    playButtonImage.src = "img/play.png";
    loadAudio(audioIndex);
});
prevButton.addEventListener("click", () => {
    audioIndex = (audioIndex - 1 + audioList.length) % audioList.length;
    audioPlayer.pause();
    playButtonImage.src = "img/play.png";
    loadAudio(audioIndex);
});