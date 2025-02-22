import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import { BreakpointObserver } from '../utils/breakpoint-utils';

export class SplideManager {
  constructor() {
    this.slideItem = document.querySelector('.splide');
    this.splideInstance = null;
    this.options = {
      sp: {
        autoplay: true,
        type: 'fade',
        rewind: true,
        rewind: true,
        speed: 1000,
        perPage: 1,
      },
      pc: {
        type: 'loop',
        gap: '1vw',
        perPage: 3,
        perMove: 1,
      },
    };
  }

  getOptions(isPC) {
    if (isPC) {
      return this.options.pc;
    } else {
      return this.options.sp;
    }
  }

  initializeSplide(isPC) {
    const options = this.getOptions(isPC);
    if (this.splideInstance) {
      this.splideInstance.destroy();
    }
    this.splideInstance = new Splide(this.slideItem, options);
    this.splideInstance.mount();
  }

  init() {
    new BreakpointObserver((isPC) => {
      this.initializeSplide(isPC);
    });
  }
}
