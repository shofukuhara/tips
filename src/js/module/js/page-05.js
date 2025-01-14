import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export class scrollScale {
  constructor() {
    this.section = document.querySelector('[data-section]');
    this.image = document.querySelector('[data-image]');
  }

  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this.ScrollTrigger();
    });
  }
  ScrollTrigger() {
    gsap.to(this.image, {
      scale: 1.5, // 拡大倍率
      duration: 1, // アニメーションの長さ
      ease: 'power1.out',
      scrollTrigger: {
        trigger: this.section, // トリガー要素
        start: 'top center', // スクロール開始位置
        end: 'bottom top', // スクロール終了位置
        scrub: true, // スクロールに応じてアニメーションを同期
        markers: true, // デバッグ用のマーカー
        pin: false, // 要素を固定しない
      },
    });
  }
}
