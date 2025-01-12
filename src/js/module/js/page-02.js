import { gsap } from 'gsap';
export class scrollAnimationObserver {
  constructor(options = { threshold: 0.55, rootMargin: '0px' }) {
    // 複数の observer を保存
    this.observers = [];
    this.options = options;
    this.fadeItem = 'data-scroll-fade';
  }

  // コールバック
  _handleIntersect(entries) {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        // 交差した場合のアニメーション
        if (target.hasAttribute(this.fadeItem)) {
          gsap.to(target, {
            duration: 0.8,
            ease: 'power2.out',
            autoAlpha: 1,
            onComplete: () => {
              target.setAttribute(this.fadeItem, 'active');
            },
          });
        }
      }
    });
  }

  // 観察する対象要素とオプションを受け取る
  _createObserver(selector, options = {}) {
    const observer = new IntersectionObserver(
      (entries, obs) => this._handleIntersect(entries, obs),
      { ...this.options, ...options }
    );

    // 監視対象の要素を指定
    document.querySelectorAll(selector).forEach((element) => {
      observer.observe(element);
    });

    this.observers.push(observer);
  }

  // 監視を開始
  init() {
    this._createObserver(`[${this.fadeItem}]`, {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.55,
    });
  }
}
