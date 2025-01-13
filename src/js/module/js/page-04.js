import { gsap } from 'gsap';

export class splitAnimation {
  constructor() {
    this.element = document.querySelector('[data-split]');
    this.button = document.querySelector('[data-load]');
  }

  init() {
    this.button.addEventListener('click', () => {
      this._spitText();
      this._spitFadeIn();
    });
  }

  _spitText() {
    this.text = this.element.textContent;
    this.element.textContent = '';
    this.text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      gsap.to(span, {
        autoAlpha: 0,
      });
      this.element.appendChild(span);
    });
  }

  _spitFadeIn() {
    const spans = this.element.querySelectorAll('span');
    gsap.to(spans, {
      autoAlpha: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: {
        each: 0.12,
      },
    });
  }
}
