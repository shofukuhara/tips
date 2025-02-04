import { gsap } from 'gsap';

export class Floating {
  constructor() {
    this.button = document.querySelector('[data-button]');
    this.visibleAreas = document.querySelectorAll('[data-trigger="visible"]');
    this.options = {
      rootMargin: '0px',
      threshold: 0.1,
    };
  }

  init() {
    gsap.set(this.button, { autoAlpha: 0 });
    this._createObserver();
  }

  _createObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this._fadeInButton();
        } else {
          this._fadeOutButton();
        }
      });
    }, this.options);
    this.visibleAreas.forEach((area) => {
      observer.observe(area);
    });
  }

  // **ボタンをフェードイン**
  _fadeInButton() {
    gsap.to(this.button, {
      autoAlpha: 1,
      ease: 'power1.out',
      duration: 0.5,
      onComplete: () => {
        this.button.setAttribute('data-button', 'visible');
      },
    });
  }

  // **ボタンをフェードアウト**
  _fadeOutButton() {
    gsap.to(this.button, {
      autoAlpha: 0,
      ease: 'power1.out',
      duration: 0.5,
      onComplete: () => {
        this.button.setAttribute('data-button', 'hidden');
      },
    });
  }
}
