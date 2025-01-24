import { gsap } from 'gsap';
export class fvAnimation {
  constructor() {
    this.bg = document.querySelector('[data-bg]');
    this.list = document.querySelector('[data-list]');
    this.items = document.querySelectorAll('[data-item]');
  }
  init() {
    window.addEventListener('load', () => {
      const tl = gsap.timeline();
      tl.add(() => {
        this._bgAnimation();
      }).add(() => {
        this._fvTranslateX();
        this._fvImageScale();
      });
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
      duration: 3,
      xPercent: -100,
      ease: 'power1.inOut',
    });
  }
  _fvImageScale() {
    this.items.forEach((item) => {
      gsap.to(item, {
        duration: 2,
        delay: 0.8,
        scale: 1,
        ease: 'power1.inOut',
        stagger: {
          each: 2,
        },
      });
    });
  }
}
