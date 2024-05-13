import gsap from 'gsap';

gsap.from('.main-wrapper', {
  autoAlpha: 0,
});

gsap.from('#heading-wrapper > *', {
  y: '16px',
  opacity: 0,
});

const items = document.querySelectorAll('.blog-list_item');

items.forEach((e, i) => {
  gsap.from(e.querySelectorAll('*'), {
    y: '16px',
    opacity: 0,
    delay: `0.0${i * 5}`,
    stagger: {
      amount: 0.2,
    },
  });
});
