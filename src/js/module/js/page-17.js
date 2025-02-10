import { gsap } from 'gsap';

export class FvAnimation2 {
  constructor() {
    this.imgList = document.querySelectorAll('[data-img]');
    this.textList = document.querySelectorAll('[data-text]');
    this.list = document.querySelectorAll('.p-page17_item');
  }

  init() {
    this._slide();
    console.log('item');
  }

  _slide() {
    const tl = gsap.timeline({ repeat: -1 });

    this.imgList.forEach((img, index) => {
      const nextIndex = (index + 1) % this.imgList.length; // 次のスライドのインデックス

      tl.fromTo(img, { scale: 1.5 }, { scale: 1, duration: 10 }) // 画像の縮小
        .fromTo(this.textList, { yPercent: 100 }, { yPercent: 0, duration: 1 })
        .to(this.list[index], { opacity: 0, duration: 1 }, '<') // フェードアウト
        .set(this.list[nextIndex], { opacity: 1, duration: 1 }, '-=1.5'); // 次のスライドのアイテムを表示
    });
  }
}
