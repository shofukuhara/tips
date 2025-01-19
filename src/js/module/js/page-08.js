import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';

export class Slider {
  constructor() {
    this.content = document.querySelector(".swiper");
    this.options = {
      effect: "cards",
      grabCursor: true,
    };
    this.cardsEffectOptions = {
      perSlideOffset: 15, 
      perSlideRotate: 10,
      rotate: true,
      slideShadows: false,
    };
  }

  init() {
    new Swiper(this.content, {
      ...this.options,
      cardsEffect: {
        ...this.cardsEffectOptions,
      },
    });
  }
}
