import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export class splitFadeScroll {
  constructor() {
    this.element = document.querySelectorAll('[data-split-fade]');
  }

  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this._split();
    });
  }

  _split() {
    this.element.forEach((element) => {
      this.text = element.textContent;
      element.textContent = '';
    });
  }
}
