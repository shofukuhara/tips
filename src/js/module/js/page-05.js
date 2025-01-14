import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export class scrollScale {
  constructor() {
    this.section = document.querySelector('[data-section]');
    this.image = document.querySelector('[data-image]');
  }

  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this.ScrollTrigger();
    });
  }
  ScrollTrigger() {
    gsap.to(this.image, {
      width: '100vw',
      height: '100vh',
      duration: 1,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: this.section,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        // markers: true,
      },
    });
  }
}
