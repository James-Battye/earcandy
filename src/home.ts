import gsap from 'gsap';

const tl = gsap.timeline();

tl.from('.home-hero_item', {
  y: '5rem',
  opacity: 0,
  rotateZ: 0.5,
  autoAlpha: 0,
  stagger: 0.1,
});
