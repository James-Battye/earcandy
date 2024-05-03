import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);
new SplitType('h1', { types: 'lines,chars' });
new SplitType('h2:not(#sign-up)', { types: 'lines,chars' });

// GSAP Set Functions

gsap.set('.line', {
  overflow: 'hidden',
});

gsap.set('.char', {
  transformOrigin: 'bottom center',
});

// GSAP Auto Alpha Init
const tl = gsap.timeline();
function init() {
  tl.from('body', {
    autoAlpha: 0,
  });
}

const intro = gsap.timeline();

intro
  .from('h1 .char', {
    yPercent: 100,
    stagger: 0.05,
  })
  .from(
    '.grid_col-10.is-about-what .char',
    {
      yPercent: 100,
      stagger: 0.05,
    },
    '<+0.5'
  )
  .from(
    '.about-hero_p p',
    {
      opacity: 0,
      x: '-1rem',
      filter: 'blur(5px)',
    },
    '<'
  )
  .from(
    '.about-what_card-wrap',
    {
      opacity: 0,
      stagger: 0.1,
    },
    '<+0.5'
  );

const swb = document.querySelectorAll('.about-team_wrap .grid_col-10.is-team');

const options = {
  opacity: 0,
  x: '-1rem',
  filter: 'blur(2px)',
};

swb.forEach((e) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: e,
      start: 'top 80%',
      end: 'top 90%',
    },
  });

  tl.from(e.querySelectorAll('.char'), {
    yPercent: 100,
    stagger: 0.05,
    scaleY: 1.05,
    scaleX: 0.95,
  })
    .from(e.querySelector('.about-team_role'), options, '<0.5')
    .from(e.querySelector('p'), options, '<0.25');
});

init();
