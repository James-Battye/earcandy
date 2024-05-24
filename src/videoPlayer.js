import LazyLoad from 'vanilla-lazyload';

let videoPlayers = [];

function pauseVideos() {
  videoPlayers.forEach((player) => {
    player.pause();
  });
}

function initVideoPlayers() {
  new LazyLoad(
    {
      elements_selector: 'iframe',
      callback_loaded: function (iframe) {
        videoPlayers.push(new Vimeo.Player(iframe, { id: iframe.getAttribute('video-id') }));
      },
    },
    document.querySelectorAll('.video-popup_wrap.is-open iframe')
  );
}

const popupWrapper = document.querySelector('.video-popup_wrap');
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      const { target } = mutation;
      if (target.classList.contains('is-open')) {
        initVideoPlayers();
      } else {
        pauseVideos();
      }
    }
  });
});

observer.observe(popupWrapper, { attributes: true });

document.querySelector('.video-popup_close-icon').addEventListener('click', () => {
  pauseVideos();
});

setTimeout(() => {
  const slider = ycAttributes.sliders['videos-0'];
  slider.on('slideChange', () => {
    pauseVideos();
  });
}, 250);
