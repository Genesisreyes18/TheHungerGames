// script.js

// Sidebar Toggle
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

function w3_close() {
  mySidebar.style.display = 'none';
}


// Modal Image Gallery 
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// YouTube “Quiz” Modal 
let player;
const choiceModal = document.getElementById('choiceModal');

// This function is called by the YouTube IFrame API once it's loaded
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: 'DkSE7mISg7k',  // initial video
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Show the modal when the video ends
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    choiceModal.style.display = 'flex';
  }
}

// Wire up each quiz button to load the next video
document.addEventListener('DOMContentLoaded', function() {
  choiceModal.querySelectorAll('button[data-video]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const nextVideoId = this.getAttribute('data-video');
      choiceModal.style.display = 'none';
      player.loadVideoById(nextVideoId);
    });
  });
  const closeButton = document.querySelector('.close-button');

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      choiceModal.style.display = 'none';
    });
  }
});
