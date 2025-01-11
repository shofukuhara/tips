import { gsap } from 'gsap';

export class load {
  constructor() {
    this.circle = document.querySelector('[data-circle]');
  }
  init() {
    window.addEventListener('load', () => {
      this._load();
    });
  }
  _load() {
    if (this.circle) {
      gsap.to(this.circle, {
        duration: 1.5,
        ease: 'power1.out',
        clipPath: 'circle(100% at 50% 50%)',
      });
    }
  }
}
