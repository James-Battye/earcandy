import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

new SplitType('#sign-up', { types: 'chars,lines' });

gsap.registerPlugin(ScrollTrigger);

gsap.set('.line', {
  overflow: 'hidden',
});
// GSAP Auto Alpha Init
const tl = gsap.timeline();
function init() {
  tl.from('.char', {
    autoAlpha: 0,
  });
}

document.querySelectorAll('.footer_component .line').forEach((e) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer_component',
      start: 'top 75%',
    },
  });

  tl.from(e.querySelectorAll('.char'), {
    yPercent: 100,
    stagger: 0.05,
  });
});

init();
