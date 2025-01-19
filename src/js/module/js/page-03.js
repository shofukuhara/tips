import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import { gsap } from 'gsap';
barba.use(barbaPrefetch);

export class loadAnimation {
  constructor() {
    this.init();
  }
  init() {
    barba.init({
      transitions: [
        {
          name: 'default-transition',
          leave: (data) =>
            this._animateClipPath(
              data.current.container,
              'circle(0% at 50% 50%)'
            ),
          enter: (data) =>
            this._animateClipPath(
              data.next.container,
              'circle(100% at 50% 50%)'
            ),
        },
      ],
    });
  }
  _animateClipPath(container, clipPathValue) {
    const item = container.querySelector('[data-circle]');
    gsap.to(item, {
      duration: 1.25,
      ease: 'power1.out',
      clipPath: clipPathValue,
    });
  }
}
