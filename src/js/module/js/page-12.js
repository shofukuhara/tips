export class fvPromiseAnimation {
  constructor() {
    this.img = document.querySelector(`[data-img="fv"]`);
    this.en = document.querySelector(`[data-en]`);
    this.ja = document.querySelector(`[data-ja]`);
    // this.cursor = 
  }

  init() {
    window.addEventListener('load', () => {
      this._fadeIn();
    });
  }

  async _fadeIn() {
    await this._delay(100 * 5);
    this.img.setAttribute('data-img', 'active');

    await this._delay(100 * 5);
    this.en.setAttribute('data-en', 'active');

    await this._delay(100 * 5);
    this.ja.setAttribute('data-ja', 'active');
  }

  _delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
}
