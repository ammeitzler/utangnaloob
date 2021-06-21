const unmute_elm = document.getElementById("unmute-video");
let tag = document.createElement('script');
let firstScriptTag = document.getElementsByTagName('script')[0];
let player;

tag.src = "https://www.youtube.com/iframe_api";
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-video', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
  });
}

function onPlayerReady(event) {
  console.log("hey Im ready");
  event.target.playVideo();
  event.target.setVolume(1);
  event.target.stopVideo();
  //do whatever you want here. Like, player.playVideo();
}

function onPlayerStateChange() {
  console.log("my state changed");
}

unmute_elm.addEventListener('click', function(event) {
  player.mute();
  if (player.isMuted()) {
    player.unMute();
  }
});

setTimeout(function(){
  unmute_elm.click();
}, 5000);

