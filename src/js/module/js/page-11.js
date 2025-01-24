import { gsap } from 'gsap';
export class fvAnimation {
  constructor() {
    this.bg = document.querySelector('[data-bg]');
    this.list = document.querySelector('[data-list]');
  }
  init() {
    window.addEventListener('load', () => {
      const tl = gsap.timeline();
      // this._bgAnimation();
      // this._fvTranslateX();
    });
  }
  _bgAnimation() {
    gsap.to(this.bg, {
      transform: 'scale(1,0)',
      duration: 0.9,
      ease: 'power3.out',
    });
  }
  _fvTranslateX() {
    gsap.to(this.list, {
      duration: 1,
      xPercent: -100,
      ease: 'power3.out',
    });
  }
}
