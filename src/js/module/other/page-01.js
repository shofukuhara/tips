import { gsap } from 'gsap';
export class accordion {
  constructor() {
    this.accordion = document.querySelector('[data-accordion]');
    this.text = document.querySelector('[data-accordion="text"]');
  }

  init() {
    this.accordion.addEventListener('click', (e) => {
      e.preventDefault();
      this._toggle();
    });
  }

  _close() {
    gsap.to(this.text, {
      height: 0,
      duration: 0.3,
      ease: 'power3.out',
      overwrite: true,
      onComplete: () => {
        this.accordion.setAttribute('data-accordion', 'close');
      },
    });
  }
  _open() {
    gsap.to(this.text, {
      height: 'auto',
      duration: 0.3,
      ease: 'power3.out',
      overwrite: true,
      onComplete: () => {
        this.accordion.setAttribute('data-accordion', 'open');
      },
    });
  }
  _toggle() {
    if (this.accordion.getAttribute('data-accordion') === 'open') {
      this._close();
    } else {
      this._open();
    }
  }
}
