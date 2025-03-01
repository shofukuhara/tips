import { gsap } from 'gsap';

export class Hover {
  constructor() {
    this.cursor = document.querySelector('[data-cursor]');
    this.container = document.querySelector('[data-container]');
    this.pos = { x: 0, y: 0 };
    this.mouse = {
      x: this.pos.x,
      y: this.pos.y,
    };
    this.speed = 0.5;
  }

  init() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.pageX;
      this.mouse.y = e.pageY;
      this._mouseOver();
    });

    this.container.addEventListener('mouseenter', () => {
      this.cursor.setAttribute('data-cursor', 'mouseOver');
      gsap.to(this.cursor, {
        autoAlpha: 1,
        scale: 1.2,
      });
    });
    this.container.addEventListener('mouseleave', () => {
      this.cursor.setAttribute('data-cursor', '');
      gsap.to(this.cursor, {
        autoAlpha: 0,
        scale: 1,
      });
    });
  }

  _mouseOver() {
    let cursorSetX = gsap.quickSetter(this.cursor, 'x', 'px', {
      duration: 3,
      ease: 'power3',
    });
    let cursorSetY = gsap.quickSetter(this.cursor, 'y', 'px', {
      duration: 3,
      ease: 'power3',
    });
    gsap.ticker.add(() => {
      this.pos.x += this.mouse.x - this.pos.x;
      this.pos.y += this.mouse.y - this.pos.y;
      cursorSetX(this.pos.x - this.cursor.offsetWidth / 2);
      cursorSetY(this.pos.y - this.cursor.offsetHeight / 2);
    });
  }
}
