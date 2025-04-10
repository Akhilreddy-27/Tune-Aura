let prog = document.getElementById("progress");
let song = document.getElementById("song"); // this should be the actual <audio> element
let sng = document.getElementById("sng");   // unclear why there's a second one?
let ctrlicon = document.querySelectorAll(".controls");
let playbtn = document.getElementById("now");
let nextbtn = document.getElementById("next");
let backbtn = document.getElementById("back");
let sum=document.getElementById("sum");
let it=document.getElementById("it");
let mas=document.getElementById("mas");


const songs = ["itachi", "story", "summertime"];
let index ;

sum.addEventListener("click",()=>{
    index=2
    loadSong(songs[index]);
    playSong();

})
it.addEventListener("click",()=>{
    index=0
    loadSong(songs[index]);
    playSong();

})
mas.addEventListener("click",()=>{
    index=1
    loadSong(songs[index]);
    playSong();

})

function loadSong(songName) {
    song.src = `${songName}.mp3`; // Use the actual audio element
}

function playSong() {
    song.play();
    playbtn.classList.remove("fa-solid fa-play");
    playbtn.classList.add("fa-solid fa-pause");
}

function pauseSong() {
    song.pause();
    playbtn.classList.remove("fa-solid fa-pause");
    playbtn.classList.add("fa-solid fa-play");
}

playbtn.addEventListener("click", () => {
    if (song.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

backbtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = songs.length - 1;
    loadSong(songs[index]);
    playSong();
});

nextbtn.addEventListener("click", () => {
    index++;
    if (index >= songs.length) index = 0;
    loadSong(songs[index]);
    playSong();
});




song.onloadedmetadata = function(){
    prog.max=song.duration;
    prog.value=song.currentTime;
}



if(song.play()){
    setInterval(()=>{
        prog.value=song.currentTime;
    },500)
}

prog.onchange = function(){
    song.play();
    song.currentTime = prog.value;
    if(ctrlicon.classList.contains("fa-play")){
        ctrlicon.classList.remove("fa-play");  
        ctrlicon.classList.add("fa-pause")
    }
}