const slider = ycAttributes.sliders['videos-0'];
const nextArrow = document.querySelectorAll("[yc-slider-element='next-arrow']");
const prevArrow = document.querySelectorAll("[yc-slider-element='prev-arrow']");
const videoElements = document.querySelectorAll('.home-hero_item');
const videoWrapper = document.querySelector('.video-popup_wrap');

document.querySelector('.video-popup_close-btn').addEventListener('click', togglePopup);

function togglePopup() {
  videoWrapper.classList.toggle('is-open');
}

videoElements.forEach((e, i) => {
  e.addEventListener('click', () => {
    slider.slideTo(i, 0);
    togglePopup();
  });
});

nextArrow.forEach((e) => {
  e.addEventListener('click', () => {
    slider.slideNext();
  });
});

prevArrow.forEach((e) => {
  e.addEventListener('click', () => {
    slider.slidePrev();
  });
});
