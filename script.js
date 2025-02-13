console.log("Welcome to Spotify");
let songIndex =0;
let audioElement = new Audio('1.mp3.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let mastername = document.getElementById('master');
let songitem = Array.from(document.getElementsByClassName('songitem'))
let songs =[
    {songName : "Sundari Neeve", filePath: "Spotify Clone/1.mp3.mp3", coverpath: "img1.png"},
    {songName : "Lalitha Priya", filePath: "Spotify Clone/2.mp3.mp3",coverpath: "img2.png"},
    {songName : "Mate Rani", filePath: "Spotify Clone/3.mp3.mp3",coverpath: "img3.png"},
    {songName : "Yamaho Nee", filePath: "Spotify Clone/4.mp3.mp3",coverpath: "img4.png"},
]
songitem.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  songitem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    }
    )
  }
  )
masterplay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    updateSongItemPlayIcon('pause');
  }  
  else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    updateSongItemPlayIcon('play');
    
  }
})
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllplays = () =>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

  })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
  
  makeAllplays();
   songIndex=parseInt(e.target.id);
   console.log(e.target);
  e.target.classList.remove('fa-play-circle');
  e.target.classList.add('fa-pause-circle');
  audioElement.src =  `${songIndex+1}.mp3.mp3`;
  mastername.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})

})
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>9){
    songIndex=0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src =  `${songIndex+1}.mp3.mp3`;
  mastername.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{

  if(songIndex<0){
    songIndex=0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src =  `${songIndex+1}.mp3.mp3`;
  mastername.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
})
function updateSongItemPlayIcon(state) {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index) => {
    if (index === songIndex) {
      if (state === 'pause') {
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
      } else {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
      }
    }
  });
}