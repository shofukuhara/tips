import { gsap } from 'gsap';

export class HoverItem {
  constructor() {
    this.blockList = document.querySelectorAll('[data-item]');
    this.cursorArea = document.querySelector('[data-cursor-area]');
    this.cursor = document.querySelector('[data-cursor]');
    this.pos = { x: 0, y: 0 }; // カーソルの座標
    this.mouse = { x: 0, y: 0 }; // マウスの座標
    this.speed = 0.1; // 遅延速度（0.01〜1）
    // カーソルの座標更新
    this.cursorSetX = gsap.quickSetter(this.cursor, 'x', 'px');
    this.cursorSetY = gsap.quickSetter(this.cursor, 'y', 'px');
    // カーソルの pointer-events を無効化
    this.cursor.style.pointerEvents = 'none';
  }

  // カーソルを計算するエリア
  get areaSize() {
    const area = this.cursorArea;
    return {
      width: area.offsetWidth,
      height: area.offsetHeight,
    };
  }

  init() {
    this._addItemEvent();
    this._trackMouse();
  }

  _addItemEvent() {
    this.blockList.forEach((blockItem) => {
      blockItem.addEventListener('mouseenter', () => {
        console.log('mouseenter:', blockItem);
        this._mouseOver();
      });

      blockItem.addEventListener('mouseleave', () => {
        console.log('mouseleave:', blockItem);
        this._mouseOut();
      });
    });
  }

  _mouseOver() {
    gsap.to(this.cursor, {
      autoAlpha: 1,
      scale: 1,
      ease: 'power1.out',
      duration: 0.3,
    });
  }

  _mouseOut() {
    gsap.to(this.cursor, {
      autoAlpha: 0,
      scale: 0,
      ease: 'power1.out',
      duration: 0.3,
    });
  }

  _trackMouse() {
    const area = this.cursorArea;
    // マウスの位置を追跡
    area.addEventListener('mousemove', (e) => {
      // 25はcssで設定した円の半径
      this.mouse.x = e.clientX - 25;
      this.mouse.y = e.clientY - 25;
    });
    // GSAPでスムーズにカーソルを追従
    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - this.speed, gsap.ticker.deltaRatio());
      this.pos.x += (this.mouse.x - this.pos.x) * dt;
      this.pos.y += (this.mouse.y - this.pos.y) * dt;
      // カーソルをスムーズに追従
      this.cursorSetX(this.pos.x);
      this.cursorSetY(this.pos.y);
    });
  }
}
