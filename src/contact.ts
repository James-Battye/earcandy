import gsap from 'gsap';
import SplitType from 'split-type';

new SplitType('h1', { types: 'lines,chars' });
const address = new SplitType('.contact_address', { types: 'lines,chars' });

gsap.from('.main-wrapper', {
  autoAlpha: 0,
});

const tl = gsap.timeline();

if (address.lines) {
  tl.from('body', {
    autoAlpha: 0,
  })
    .from(
      'h1 .char',
      {
        yPercent: 100,
        stagger: 0.05,
      },
      0
    )
    .from(
      address.lines[0].querySelectorAll('.char'),
      {
        yPercent: 100,
        stagger: 0.05,
      },
      '<0.5'
    )
    .from(
      address.lines[1].querySelectorAll('.char'),
      {
        yPercent: 100,
        stagger: 0.05,
      },
      '<0.1'
    )
    .from(
      address.lines[2].querySelectorAll('.char'),
      {
        yPercent: 100,
        stagger: 0.05,
      },
      '<0.1'
    );

  if (address.lines[3]) {
    tl.from(
      address.lines[3].querySelectorAll('.char'),
      {
        yPercent: 100,
        stagger: 0.05,
      },
      '<0.1'
    );
  }

  tl.from(
    '.contact_link-wrap',
    {
      opacity: 0,
      filter: 'blur(5px)',
    },
    '<+0.5'
  ).from('.contact_map', {
    opacity: 0,
  });
}
