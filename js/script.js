window.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    var overlay = document.querySelector('.video-overlay');
  
    overlay.addEventListener('click', function() {
      video.currentTime = 0;
      video.play();
      overlay.style.display = 'none';
    });
  });