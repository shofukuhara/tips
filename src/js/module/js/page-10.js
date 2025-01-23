import { gsap } from 'gsap';

export class HoverImage {
  constructor(sectionSelector, itemSelector, bgImgSelector, imageArray) {
    this.section = document.querySelector(sectionSelector);
    this.items = document.querySelectorAll(itemSelector); // 複数要素を取得
    this.bgImg = document.querySelector(bgImgSelector); // 背景画像要素
    this.imageArray = imageArray; // 画像URL配列
  }

  init() {
    this._addSectionEvent();
    this._addItemEvents();
  }

  _addSectionEvent() {
    this.section.addEventListener('mouseenter', () => {
      this._visibleImage();
    });

    this.section.addEventListener('mouseleave', () => {
      this._hiddenImage();
    });

    this.section.addEventListener('mousemove', (e) => {
      this._moveImage(e);
    });
  }

  _addItemEvents() {
    this.items.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        this._changeImage(index);
      });
    });
  }

  _visibleImage() {
    gsap.to(this.bgImg, {
      opacity: 1,
      visibility: 'visible',
    });
  }

  _hiddenImage() {
    gsap.to(this.bgImg, {
      autoAlpha: 0,
    });
  }

  _moveImage(event) {
    gsap.to(this.bgImg, {
      duration: 2,
      x: event.pageX,
      y: event.pageY,
      ease: 'Power4.easeOut',
    });
  }

  _changeImage(index) {
    this.bgImg.style.backgroundImage = `url("${this.imageArray[index]}")`;
    gsap.set(this.bgImg, { backgroundPosition: 'center' });
    gsap.to(this.bgImg, {
      repeat: -1,
      ease: 'linear',
    });
  }
}
