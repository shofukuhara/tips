export class Canvas {
  constructor() {
    this.dom = document.getElementById('canvas');
    this.ctx = this.dom.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dom.width = this.width / 2;
    this.dom.height = this.height / 2;
  }

  init() {
    window.addEventListener('load', () => {
      this._draw();
    });
  }

  _draw() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(0, 0, this.width, this.height); // キャンバスを青で塗りつぶし
  }
}
