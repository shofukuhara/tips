import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import { gsap } from 'gsap';
barba.use(barbaPrefetch);

export const item = () => {
  barba.init({
    transitions: [
      {
        name: 'default-transition',
        leave: function (data) {
          const item = data.current.container.querySelector('[data-circle]');
          gsap.to(item, {
            duration: 1.25,
            ease: 'power1.out',
            clipPath: 'circle(0% at 50% 50%)',
          });
        },
        enter: function (data) {
          const item = data.next.container.querySelector('[data-circle]');
          gsap.to(item, {
            duration: 1.25,
            ease: 'power1.out',
            clipPath: 'circle(100% at 50% 50%)',
          });
        },
      },
    ],
  });
};
