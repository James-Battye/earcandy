import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.logos_img').forEach((e) => {
  e.addEventListener('mouseenter', function () {
    gsap.to('.logos_img', { opacity: 0.2 });
    gsap.to(e, { opacity: 1 }); // Set the opacity of the current element back to 1
  });

  e.addEventListener('mouseleave', () => {
    gsap.to('.logos_img', { opacity: 1 });
  });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "[yc-animate='logo-section'",
    start: 'top 70%',
  },
});

tl.from('.logos_img', {
  opacity: 0,
  filter: 'blur(10px)',
  stagger: 0.1,
});
