const pixelYulita = document.getElementById('pixelYulita');
const normalImg = 'assets/pixel_cantikuu.png';
const blinkImg = 'assets/pixel_cantikuu_blink.png';

setInterval(() => {
  pixelYulita.src = blinkImg;
  setTimeout(() => {
    pixelYulita.src = normalImg;
  }, 400);
}, 3000);

function goToPage(targetId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(targetId).classList.add('active');
}

function playOpenEffect() {
  const effect = document.getElementById('effectOpen');
  effect.currentTime = 0;
  effect.play();
}

const playButton = document.getElementById('play-music');
const bgm = document.getElementById('bgm');
let isPlaying = false;

playButton.addEventListener('click', () => {
  if (!isPlaying) {
    bgm.muted = false;
    bgm.play();
    playButton.innerText = '⏸️ Pause Musik';
  } else {
    bgm.pause();
    playButton.innerText = '🎵 Putar Musik';
  }
  isPlaying = !isPlaying;
});

function showGiftModal() {
    const modal = document.getElementById('giftModal');
    modal.style.display = 'flex';
  }
  
  function closeModal() {
    const modal = document.getElementById('giftModal');
    modal.style.display = 'none';
  }
  
  