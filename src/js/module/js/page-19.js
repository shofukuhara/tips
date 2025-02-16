import { gsap } from 'gsap';

export class Motion {
  constructor() {
    this.box = document.querySelector('[data-box]');
  }

  init() {
    ['DOMContentLoaded', 'resize'].forEach((event) => {
      window.addEventListener(event, () => {
        this._motion();
      });
    });
  }

  _motion() {
    const tween = gsap.to(this.box, {
      duration: 50,
      repeat: -1,
      ease: 'linear',
      onUpdate: () => {
        let t = tween.progress() * Math.PI * 2; // 0 ~ 2π

        // X, Yの振幅を画面サイズの半分に設定（中央基準）
        //　要素が動く範囲
        let ampX = (window.innerWidth - this.box.offsetWidth) / 2;
        let ampY = (window.innerHeight - this.box.offsetHeight) / 2;

        // 画面中央基準で8の字を描く
        let x =
          Math.sin(t) * ampX + window.innerWidth / 2 - this.box.offsetWidth / 2;
        let y =
          Math.sin(t * 2) * ampY +
          window.innerHeight / 2 -
          this.box.offsetHeight / 2;

        gsap.set(this.box, { x: x, y: y });
      },
    });
  }
}
