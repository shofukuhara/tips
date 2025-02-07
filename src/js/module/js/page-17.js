import { gsap } from 'gsap';
export class FvAnimation2 {
  constructor() {
    this.img = document.querySelectorAll('[data-img]');
    this.item = document.querySelectorAll('[data-img]');
  }

  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this._slide();
      console.log('item');
    });
  }
  _slide() {
    gsap.fromTo(
      this.img,
      { scale: 1.5, duration: 10 },
      {
        scale: 1,
        duration: 10,
        onComplete:{

        },
        stagger: {
          each: 0.4,
        },
      }
    );
  }
}
