import LazyLoad from 'vanilla-lazyload';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[hover-element]').forEach((element) => {
    const video = element.querySelector('video');

    element.addEventListener('mouseenter', () => {
      if (!video.classList.contains('loaded')) {
        let videoArray = [video];
        new LazyLoad(
          {
            callback_loaded: function () {
              video.currentTime = 0;
              video.play();
            },
          },
          videoArray
        );
      }
      // else {
      //   // video.currentTime = 0;
      //   video.play();
      // }
    });
  });
  // element.addEventListener('mouseleave', () => {
  //   video.pause();
  // });
});
