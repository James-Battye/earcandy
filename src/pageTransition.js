import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function pageTransitionOut() {
  const links = document.querySelectorAll('a');

  links.forEach((e) => {
    if (
      e.parentElement.getAttribute('role') === 'navigation' ||
      e.getAttribute('no-transition') || // Skip if 'no-transition' attribute is present
      !e.getAttribute('href') || // Skip if there's no 'href' attribute
      e.getAttribute('href').includes('#') || // Skip if 'href' is an anchor link
      e.getAttribute('target') === '_blank' || // Skip if the target is set to open in a new tab
      new URL(e.getAttribute('href'), document.baseURI).hostname !== window.location.hostname // Check if the link is external
    ) {
      return; // Return and do nothing
    }
    e.addEventListener('click', (event) => {
      event.preventDefault();
      let tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          setTimeout(function () {
            window.location.href = e.getAttribute('href');
          }, 200);
        },
      });

      tl.to('.main-wrapper section', {
        y: '16px',
        opacity: 0,
        stagger: {
          amount: 0.5,
          from: 'start',
        },
        ease: 'power3.inOut',
      });
      tl.play();
    });
  });
}

pageTransitionOut();
