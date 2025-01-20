import '@splidejs/splide/css/core';

export class splide {
  constructor() {
    this.slideItem = document.querySelector('.splide');
    this.spOptions = {
      type: 'loop',
      perPage: 1,
    };
    this.pcOptions = {
      type: 'loop',
      perPage: 3,
    };
  }
}
