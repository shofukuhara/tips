export class Canvas {
  constructor() {
    this.dom = document.getElementById('canvas');
    this.ctx = this.dom.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dom.width = this.width / 2;
    this.dom.height = this.height / 2;

    this.image = new Image();
    this.image.src = '../../public/assets/images/img_01.jpg';
    this.image.onload = () => this._draw();
  }

  init() {
    ['resize', 'scroll', 'load'].forEach((event) => {
      window.addEventListener(event, () => {
        window.addEventListener(event, () => this._draw());
        console.log(this.image);
      });
    });
  }

  _draw() {
    this.ctx.clearRect(0, 0, this.dom.width, this.dom.height);
    this.ctx.drawImage(this.image, 100, 100, this.dom.width, this.dom.height);
  }
}
