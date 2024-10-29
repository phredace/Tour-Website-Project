var vids = document.querySelectorAll('.vids');

vids.forEach(function(vid) {
  var timer;
  var tapped = false;

  vid.addEventListener('touchstart', function() {
    if (!tapped) {
      tapped = true;
      timer = setTimeout(function() {
        tapped = false;
      }, 300);
    } else {
      clearTimeout(timer);
      tapped = false;var vids = document.querySelectorAll('.vids');

      vids.forEach(function(vid) {
        var tapCount = 0;
        var tapTimer;
      
        vid.addEventListener('click', function() {
          tapCount++;
          if (tapCount === 1) {
            tapTimer = setTimeout(function() {
              tapCount = 0;
            }, 300);
          } else if (tapCount === 2) {
            clearTimeout(tapTimer);
            tapCount = 0;
            toggleFullscreen(vid);
          }
        });
      });
      
      function toggleFullscreen(vid) {
        if (vid.requestFullscreen) {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            vid.requestFullscreen();
          }
        } else if (vid.mozRequestFullScreen) {
          if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
          } else {
            vid.mozRequestFullScreen();
          }
        } else if (vid.webkitRequestFullscreen) {
          if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
          } else {
            vid.webkitRequestFullscreen();
          }
        } else if (vid.msRequestFullscreen) {
          if (document.msFullscreenElement) {
            document.msExitFullscreen();
          } else {
            vid.msRequestFullscreen();
          }
        }
      }
      
    }
  });
});

function toggleFullscreen(vid) {
  if (vid.requestFullscreen) {
    vid.requestFullscreen();
  } else if (vid.mozRequestFullScreen) {
    vid.mozRequestFullScreen();
  } else if (vid.webkitRequestFullscreen) {
    vid.webkitRequestFullscreen();
  } else if (vid.msRequestFullscreen) {
    vid.msRequestFullscreen();
  }
}
