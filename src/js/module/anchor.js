import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

export class ancher {
  constructor() {
    this.anchorLinks = document.querySelectorAll('a[href^="#"]');
    this.header = document.querySelector('[data-header]');
    this.headerHeight = this._headerHeight(); // 初期のヘッダー高さ
    this._resizeListener();
  }

  init() {
    this.anchorLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1); // #を除く
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          this._scrollTo(targetElement);
        }
      });
    });
  }

  _scrollTo(element) {
    gsap.to(window, {
      duration: 1,
      ease: 'power2.out',
      scrollTo: {
        y: element.offsetTop + this._headerHeight(),
        autoKill: false,
      },
    });
  }

  _headerHeight() {
    return this.header.getBoundingClientRect().height; // 少数点まで取得
  }

  _resizeListener() {
    window.addEventListener('resize', () => {
      this.headerHeight = this._headerHeight();
    });
  }
}
