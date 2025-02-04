import { gsap } from 'gsap';

export class Floating {
  constructor() {
    this.button = document.querySelector('[data-button]');
    this.visibleArea = document.querySelector('[data-trigger="visible"]');
    this.options = {
      rootMargin: '0px',
      threshold: 0, // 交差検出をより正確に
    };
  }

  init() {
    if (this.button && this.visible && this.hidden) {
      gsap.set(this.button, { autoAlpha: 0 });
      this.button.style.willChange = 'opacity'; // will-change を事前適用
      this._createObserver();
    }
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

    observer.observe(this.visible);
    observer.observe(this.hidden);
  }

  // **ボタンをフェードイン**
  _fadeInButton() {
    gsap.to(this.button, {
      autoAlpha: 1,
      ease: 'power1.out',
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
      onComplete: () => {
        this.button.setAttribute('data-button', 'hidden');
      },
    });
  }
}
