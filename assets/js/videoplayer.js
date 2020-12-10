const playButton = document.querySelector('#play-video-button');
const video = document.querySelector('#video');

playButton.addEventListener('click', function() {
  video.play();
  playButton.style.display = 'none';   
});

video.addEventListener('ended', function() {
  playButton.style.display = 'block';   
});