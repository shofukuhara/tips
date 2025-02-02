import { gsap } from 'gsap';
export class FvAnimation {
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
      x: '0%',
      ease: 'power2.inOut',
    });
  }
  _fvImageScale() {
    gsap.to(this.items, {
      duration: 2,
      delay: 0.8,
      scale: 1,
      x: '0%',
      ease: 'power1.inOut',
      stagger: {
        each: 0.2,
      },
    });
  }
}
