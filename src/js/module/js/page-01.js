import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

export class Anchor {
  constructor() {
    this.anchorLinks = document.querySelectorAll('a[href^="#"]');
    this.header = document.querySelector('[data-header]');
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
        y: element.offsetTop - this.headerHeight,
        autoKill: false,
      },
    });
  }

  get headerHeight() {
    return this.header.getBoundingClientRect().height;
  }
}
