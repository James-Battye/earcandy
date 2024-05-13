import LazyLoad from 'vanilla-lazyload';

let videoPlayers = [];

function pauseVideos() {
  videoPlayers.forEach((e) => {
    e.pause();
  });
}

new LazyLoad({
  callback_loaded: function (e) {
    if (e.tagName === 'IFRAME') {
      videoPlayers.push(new Vimeo.Player(e, e.getAttribute('video-id')));
    }
  },
});

setTimeout(() => {
  const slider = ycAttributes.sliders['videos-0'];

  slider.on('slideChange', () => {
    pauseVideos();
  });
}, 250);

document.querySelector('.video-popup_close-icon').addEventListener('click', () => {
  pauseVideos();
});
