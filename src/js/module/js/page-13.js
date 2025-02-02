import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);
export class StickyScale {
  constructor() {
    this.sticky = document.querySelector('[data-sticky]');
    this.grid = document.querySelector('[data-gridArea]');
    this.img = Array.from(document.querySelectorAll('[data-img="fv"]'));
  }
  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this.scale();
    });
  }
  scale() {
    this.custom_anime = gsap.timeline({
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: this.sticky,
        start: 'top top',
        end: 'bottom top',
        markers: true,
        scrub: true,
      },
    });
    this.custom_anime.to(this.grid, {
      scale: 2.8,
    });
    this.img.forEach((element) => {
      this.custom_anime.to(
        element,
        {
          scale: 2.8,
        },
        '<'
      );
    });
  }
}
