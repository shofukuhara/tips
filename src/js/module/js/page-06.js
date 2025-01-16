import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export class splitFadeScroll {
  constructor(options = {}) {
    this.element = document.querySelectorAll('[data-split-fade]');
    this.observers = [];
    this.options = options;
    this.section = 'data-section';
  }

  _handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this._splitAnimation(entry.target);
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

  _split() {
    this.element.forEach((element) => {
      this.text = element.textContent;
      element.textContent = '';
      this.text.split('').forEach((char) => {
        const span = document.createElement('span');
        gsap.set(span, { yPercent: 50, autoAlpha: 0 });
        span.textContent = char;
        element.appendChild(span);
      });
    });
  }

  _splitAnimation(element) {
    const spans = element.querySelectorAll('span');
    gsap.to(spans, {
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: 'power1.out',
      stagger: {
        each: 0.1,
      },
    });
  }

  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this._split();
      this._createObserver(`[${this.section}]`, {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.55,
      });
    });
  }
}
