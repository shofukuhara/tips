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
      grabCursor: true,
      loopAdditionalSlides: 0,
      loop: true,
      autoplay: {
        delay: 2000,
      },
    };
    this.effectOptions = {
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, -5],
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
    });
  }
}
