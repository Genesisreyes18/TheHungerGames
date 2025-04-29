// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Toggle sidebar
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  mySidebar.style.display = (mySidebar.style.display === 'block') ? 'none' : 'block';
}

function w3_close() {
  mySidebar.style.display = "none";
}

//youtube video
// 1) Load YouTube IFrame API asynchronously
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

let player;
const modal = document.getElementById('choiceModal');

// 2) Called by the YouTube API when ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'DkSE7mISg7k',  // your original video ID
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// 3) Detect when the video ends
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    modal.style.display = 'flex';
  }
}

// 4) Swap in the selected “option” video on button click
document.addEventListener('DOMContentLoaded', () => {
  modal.querySelectorAll('button[data-video]').forEach(btn => {
    btn.addEventListener('click', () => {
      const vid = btn.getAttribute('data-video');
      modal.style.display = 'none';
      player.loadVideoById(vid);
    });
  });
});

// expose API-ready callback
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
