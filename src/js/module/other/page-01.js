import { gsap } from 'gsap';

export class accordion {
  constructor() {
    this.accordions = document.querySelectorAll('[data-accordion]');
  }

  init() {
    this.accordions.forEach((accordion) => {
      accordion.addEventListener('click', (e) => {
        e.preventDefault();
        this._toggle(accordion);
      });
    });
  }

  _close(accordion) {
    const text = accordion.querySelector('[data-content]');
    gsap.to(text, {
      height: 0,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: true,
      onComplete: () => {
        accordion.setAttribute('data-accordion', 'close');
        accordion.removeAttribute('open');
      },
    });
  }

  _open(accordion) {
    const text = accordion.querySelector('[data-content]');
    accordion.setAttribute('open', '');
    gsap.fromTo(
      text,
      { height: 0 },
      {
        height: 'auto',
        duration: 0.5,
        ease: 'power3.out',
        overwrite: true,
        onComplete: () => {
          accordion.setAttribute('data-accordion', 'open');
        },
      }
    );
  }

  _toggle(accordion) {
    if (accordion.getAttribute('data-accordion') === 'open') {
      this._close(accordion);
    } else {
      this._open(accordion);
    }
  }
}
