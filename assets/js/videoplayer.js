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
media.addEventListener('timeupdate', function() {
    var minutes = Math.floor(media.currentTime / 60);
    var seconds = Math.floor(media.currentTime - minutes * 60);
    var minuteValue;
    var secondValue;
  
    if (minutes < 10) {
      minuteValue = '0' + minutes;
    } else {
      minuteValue = minutes;
    }
  
    if (seconds < 10) {
      secondValue = '0' + seconds;
    } else {
      secondValue = seconds;
    }
  
    var mediaTime = minuteValue + ':' + secondValue;
    timer.textContent = mediaTime;
  
    var barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
    timerBar.style.width = barLength + 'px';
  });