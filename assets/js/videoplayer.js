const playButton = document.querySelector('#play-video-button');
const video = document.querySelector('#video');
const controls = document.querySelector('.controls')

//Partie en cours de conception

const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');

var timerWrapper = document.querySelector('.timer');
var timer = document.querySelector('.timer span');
var timerBar = document.querySelector('.timer div');

//Fin partie en cours de conception

playButton.addEventListener('click', function() {
    video.play();
    playButton.style.display = 'none';
    controls.style.display = 'flex';
});

video.addEventListener('ended', function() {
    controls.style.display = 'none';
    playButton.style.display = 'block';   
});

pauseBtn.addEventListener('click', function() {
    video.pause();
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
});

playBtn.addEventListener('click', function() {
    video.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
});
//Partie en cours de conception
