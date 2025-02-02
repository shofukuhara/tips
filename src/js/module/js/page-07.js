import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export class Parallax {
  constructor() {
    this.imgs = document.querySelectorAll('[data-img]');
    this.sections = document.querySelectorAll('[data-section]');
  }
  _animation() {
    this.imgs.forEach((img, index) => {
      this.trigger = this.sections[index];
      gsap.fromTo(
        img,
        {
          yPercent: 0,
        },
        {
          yPercent: -30,
          willChange: 'transform',
          ease: 'none',
          scrollTrigger: {
            trigger: this.trigger,
            start: 'top center',
            end: 'bottom top',
            scrub: 0.1,
            // markers: true,
          },
        }
      );
    });
  }
  init() {
    this._animation();
  }
}
