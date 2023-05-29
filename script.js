console.log("Welcome to CSC-DJ");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Give Me Some Sunshine", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "7Rings", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Nachi Nachi", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Stressed out", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Alan Walker - Darkside", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Aankh Marey", filePath: "songs/11.mp3", coverPath: "covers/x.jpg"},
    {songName: "Coca Cola", filePath: "songs/12.mp3", coverPath: "covers/x.jpg"},
    {songName: "Katy Perry - Bon Appetit", filePath: "songs/13.mp3", coverPath: "covers/x.jpg"},
    {songName: "Aabhija Sanam", filePath: "songs/14.mp3", coverPath: "covers/x.jpg"},
    {songName: "Agar tum mil jao", filePath: "songs/15.mp3", coverPath: "covers/x.jpg"},
    {songName: "Adele - Rolling Deep", filePath: "songs/16.mp3", coverPath: "covers/x.jpg"},
    {songName: "Adele - Someone like You", filePath: "songs/17.mp3", coverPath: "covers/x.jpg"},
    {songName: "Aj Micheal - Slow Dance", filePath: "songs/18.mp3", coverPath: "covers/x.jpg"},
    {songName: "Ab Tere Dil Me Ham Aagaye", filePath: "songs/19.mp3", coverPath: "covers/x.jpg"},
    {songName: "Alan_Walker Sabrina_Carpenter & FarrukoOn My Way", filePath: "songs/20.mp3", coverPath: "covers/x.jpg"},
    {songName: "Aaj Phir", filePath: "songs/21.mp3", coverPath: "covers/1.jpg"},
    {songName: "Aakashi Zep Ghere Pakhara", filePath: "songs/22.mp3", coverPath: "covers/2.jpg"},
    {songName: "Alan Walker - Alone", filePath: "songs/23.mp3", coverPath: "covers/3.jpg"},
    {songName: "Alan Walker K-391 & Emelie Hollow - Lily", filePath: "songs/24.mp3", coverPath: "covers/4.jpg"},
    {songName: "Agent Vinod - Raabta", filePath: "songs/25.mp3", coverPath: "covers/5.jpg"},
    {songName: "Aao Kabhi Haveli Pe", filePath: "songs/26.mp3", coverPath: "covers/6.jpg"},
    {songName: "Alan Walker & Ruben – Heading_Home", filePath: "songs/27.mp3", coverPath: "covers/7.jpg"},
    {songName: "Alan Walker - Ignite", filePath: "songs/28.mp3", coverPath: "covers/8.jpg"},
    {songName: "Aashiqui Sunn Raha Hai", filePath: "songs/29.mp3", coverPath: "covers/9.jpg"},
    {songName: "Alan Walker Ava Max - Alone Pt.II", filePath: "songs/30.mp3", coverPath: "covers/10.jpg"},
    {songName: "Aashiq Banaya Aapne", filePath: "songs/31.mp3", coverPath: "covers/1.jpg"},
    {songName: "Abhi Toh Party Shuru Hui Hai", filePath: "songs/32.mp3", coverPath: "covers/2.jpg"},
    {songName: "Agar Tum Saath Ho", filePath: "songs/33.mp3", coverPath: "covers/3.jpg"},
    {songName: "Alan Walker - Faded", filePath: "songs/34.mp3", coverPath: "covers/4.jpg"},
    {songName: "Alan Walker - Sing Me To Sleep", filePath: "songs/35.mp3", coverPath: "covers/5.jpg"},
    {songName: "Alan Walker - The Spectre", filePath: "songs/36.mp3", coverPath: "covers/6.jpg"},
    {songName: "Aashiq Surrender Hua", filePath: "songs/37.mp3", coverPath: "covers/7.jpg"},
    {songName: "Akh Lad Jaave", filePath: "songs/38.mp3", coverPath: "covers/8.jpg"},
    {songName: "ZAYN - Dusk Till Dawn ft.Sia", filePath: "songs/39.mp3", coverPath: "covers/9.jpg"},
    {songName: "Move Your Body", filePath: "songs/40.mp3", coverPath: "covers/10.jpg"},
    {songName: "sadda dil vi tu", filePath: "songs/41.mp3", coverPath: "covers/x.jpg"},
    {songName: "Tungevaag  Raaban  - Bad Boy", filePath: "songs/42.mp3", coverPath: "covers/x.jpg"},
    {songName: "Saibo - Shor In The City", filePath: "songs/43.mp3", coverPath: "covers/x.jpg"},
    {songName: "Sean Paul - No Lie ft.Dua Lipa", filePath: "songs/44.mp3", coverPath: "covers/x.jpg"},
    {songName: "Shawn Mendes - Stitches", filePath: "songs/45.mp3", coverPath: "covers/x.jpg"},
    {songName: "Pitbull - We Are One", filePath: "songs/46.mp3", coverPath: "covers/x.jpg"},
    {songName: "TheFatRat, Slaydit & Anjulie - Stronger", filePath: "songs/47.mp3", coverPath: "covers/x.jpg"},
    {songName: "Shawn Mendes - Treat You Better", filePath: "songs/48.mp3", coverPath: "covers/x.jpg"},
    {songName: "The Chainsmokers - Call You Mine", filePath: "songs/49.mp3", coverPath: "covers/x.jpg"},
    {songName: "We Wanna", filePath: "songs/50.mp3", coverPath: "covers/x.jpg"},
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})