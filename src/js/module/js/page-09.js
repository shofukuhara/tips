import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';

export class splide {
  constructor() {
    this.slideItem = document.querySelector('.splide');
    this.splideInstance = new Splide(this.slideItem);
    this.spOptions = {
      type: 'loop',
      perPage: 1,
    };
    this.pcOptions = {
      type: 'loop',
      perPage: 3,
    };
  }

  applyOptions(options) {
    this.splideInstance.destroy();
    this.splideInstance = new Splide(this.slideItem, options);
    this.splideInstance.mount();
  }
  init() {
    window.addEventListener('DOMContentLoaded', () => {
      applyOptions(pcOptions);
    });
  }
}
