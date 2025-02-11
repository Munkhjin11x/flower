onload = () =>{
        document.body.classList.remove("container");
};

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Create the YouTube player after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'yPYkdcdASko',  // Your YouTube video ID
    playerVars: {
      autoplay: 1,       // Auto-play on load
      loop: 1,           // Loop the video
      playlist: 'yPYkdcdASko', // Required for looping a single video
      start: 3,          // Start at 3 seconds
      controls: 0,       // Hide controls
      showinfo: 0,       // Hide info
      modestbranding: 1  // Minimal YouTube branding
    },
    events: {
      'onReady': onPlayerReady
    }
  });
}

// 3. When the player is ready, start playing.
function onPlayerReady(event) {
  event.target.playVideo();
  // Uncomment the next line to mute (helpful if auto-play with sound is blocked)
  // event.target.mute();
}