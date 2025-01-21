import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

export class SplideManager {
  constructor() {
    this.slideItem = document.querySelector('.splide');
    this.splideInstance = null;
    this.options = {
      sp: {
        type: 'loop',
        perPage: 1,
      },
      pc: {
        type: 'loop',
        gap: '1vw',
        perPage: 3,
        perMove: 1,
      },
    };
    this.mediaQuery = window.matchMedia('(min-width: 768px)');
  }

  getOptions() {
    let options;
    if (this.mediaQuery.matches) {
      options = this.options.pc;
    } else {
      options = this.options.sp;
    }
    return options;
  }

  initializeSplide() {
    const options = this.getOptions();
    if (this.splideInstance) {
      this.splideInstance.destroy();
    }
    this.splideInstance = new Splide(this.slideItem, options);
    this.splideInstance.mount();
  }

  init() {
    // 初期化処理
    window.addEventListener('DOMContentLoaded', () => {
      this.initializeSplide();
    });

    // リサイズ時の処理
    this.mediaQuery.addEventListener('change', () => {
      this.initializeSplide();
    });
  }
}
