// setTimeout(function(){
//   $("#video iframe")[0].src += "?&autoplay=1";
//   ev.preventDefault();
// //   $('#video').on('click', function () {
// //     $("iframe")[0].src += "1";
// // });
// }, 3000);

$(document).ready(function() {
  $('#play-video').on('click', function(ev) {
 
    $("#video iframe")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});




var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('existing-iframe-example', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
  });
}
function onPlayerReady(event) {
  $('iframe').click(function() { 
      ytPlayer.playVideo();
  });
}
function changeBorderColor(playerStatus) {
  var color;
  if (playerStatus == -1) {
    color = "#37474F"; // unstarted = gray
  } else if (playerStatus == 0) {
    color = "#FFFF00"; // ended = yellow
  } else if (playerStatus == 1) {
    color = "#33691E"; // playing = green
  } else if (playerStatus == 2) {
    color = "#DD2C00"; // paused = red
  } else if (playerStatus == 3) {
    color = "#AA00FF"; // buffering = purple
  } else if (playerStatus == 5) {
    color = "#FF6DOO"; // video cued = orange
  }
  if (color) {
    document.getElementById('existing-iframe-example').style.borderColor = color;
  }
}
function onPlayerStateChange(event) {
  changeBorderColor(event.data);
}
function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('player', {
    videoId: 'M7lc1UVf-VE',
    playerVars: { 'autoplay': 1, 'controls': 0 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      // 'onError': onPlayerError
    }
  });
}
