import Swiper from 'swiper/bundle';
import 'swiper/css';

export class Slider {
  constructor() {
    this.content = document.querySelector('.swiper');
    this.swiperInstance = null;
    this.slides = null;
    this.current = null;
    this.options = {
      effect: 'creative',
      grabCursor: false,
      loopAdditionalSlides: 0,
      longSwipes: 10,
      loop: true,
      autoplay: {
        delay: 2000,
      },
    };
    this.effectOptions = {
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 5],
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 5],
      },
    };
  }

  init() {
    this.swiperInstance = new Swiper(this.content, {
      ...this.options,
      creativeEffect: {
        ...this.effectOptions,
      },
      on: {
        slideChange: function () {
          const swiper = this;
          const currentIndex = swiper.activeIndex;
          swiper.slides.forEach((slide) => {
            slide.setAttribute('data-fade', '');
          });
          swiper.slides[currentIndex].setAttribute('data-fade', 'active');
        },
      },
    });
  }
}
