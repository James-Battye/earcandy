import gsap from 'gsap';

document.querySelectorAll<HTMLDivElement>('.home-hero_item').forEach((item) => {
  document.addEventListener('mousemove', (e: Event) => {
    const mouseEvent = e as MouseEvent;
    const rect = item.getBoundingClientRect();
    gsap.to(item.querySelector('.button-play'), {
      x: mouseEvent.clientX - rect.left - rect.width / 2,
      y: mouseEvent.clientY - rect.top - rect.height / 2,
      duration: 0.5,
      ease: 'power3.out',
    });
  });

  const tl = gsap.timeline({ paused: true });

  tl.to(item.querySelector('.button-play'), {
    filter: 'blur(0px)',
    opacity: 1,
    duration: 0.5,
    ease: 'power3.out',
  });
  tl.from(
    item.querySelector('.home-hero_client'),
    {
      yPercent: 100,
      opacity: 0,
      skewX: 20,
      duration: 0.3,
      ease: 'power1',
    },
    '<'
  );
  tl.from(
    item.querySelector('.home-hero_title'),
    {
      y: '2rem',
      duration: 0.3,
      ease: 'power1',
    },
    '<'
  );

  item.addEventListener('mouseenter', () => {
    item.style.cursor = 'none';
    tl.play();
  });

  item.addEventListener('mouseleave', () => {
    tl.reverse();
  });
});
