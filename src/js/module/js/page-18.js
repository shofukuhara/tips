import gsap from 'gsap';

export class Hover {
  constructor() {
    this.button = document.querySelector('[data-button]');
  }

  init() {
    this.button.addEventListener('mouseover', () => {
      this._onHover();
    });
    this.button.addEventListener('mouseleave', () => {
      this._unHover();
    });
  }

  _onHover() {
    gsap.fromTo(
      this.button,
      { backgroundColor: '#000', duration: 1, ease: 'power2.out' },
      { backgroundColor: '#fff', duration: 1, ease: 'power2.out' }
    );
  }

  _unHover() {
    gsap.fromTo(
      this.button,
      { backgroundColor: '#FFF', duration: 1, ease: 'power2.out' },
      { backgroundColor: '#000', duration: 1, ease: 'power2.out' }
    );
  }
}
