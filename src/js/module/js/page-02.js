import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
gsap.registerPlugin(CustomEase);
export class ScrollAnimationObserver {
  constructor(options = { threshold: 0.55, rootMargin: '0px' }) {
    this.observers = [];
    this.options = options;
    this.fadeItem = 'data-scroll-fade';
  }

  // 初期ロード時に現在位置より上の要素は可視化
  _initVisibility() {
    const scrollY = window.scrollY;
    document.querySelectorAll(`[${this.fadeItem}]`).forEach((element) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;

      if (elementTop < scrollY) {
        gsap.set(element, { autoAlpha: 1 });
        element.setAttribute(this.fadeItem, 'active');
      }
    });
  }

  _handleIntersect(entries) {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        const scrollY = window.scrollY;
        const elementTop = target.getBoundingClientRect().top + scrollY;

        // 現在地より下の要素だけフェードイン
        if (elementTop > scrollY) {
          gsap.to(target, {
            duration: 2,
            ease: 'power4.out',
            autoAlpha: 1,
            onComplete: () => {
              target.setAttribute(this.fadeItem, 'active');
            },
          });
        }
      }
    });
  }

  _createObserver(selector, options = {}) {
    const observer = new IntersectionObserver(
      (entries, obs) => this._handleIntersect(entries, obs),
      { ...this.options, ...options }
    );

    document.querySelectorAll(selector).forEach((element) => {
      observer.observe(element);
    });

    this.observers.push(observer);
  }

  init() {
    this._initVisibility(); 
    this._createObserver(`[${this.fadeItem}]`, {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.55,
    });
  }
}
