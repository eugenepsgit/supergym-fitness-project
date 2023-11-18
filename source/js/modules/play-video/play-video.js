const playBtn = document.querySelector('.presentation__play-button');
const playerWrapper = document.querySelector('.presentation__video');
const player = playerWrapper.querySelector('iframe');
const poster = playerWrapper.querySelector('img');

const startVideo = () => {
  playBtn.addEventListener('click', function () {
    poster.style.display = 'none';
    playBtn.style.display = 'none';
    playerWrapper.classList.remove('presentation__video--overlay');
    player.style.display = 'block';
    player.src += '&autoplay=1';
  });
};

export {startVideo};
