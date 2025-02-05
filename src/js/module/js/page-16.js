export class Video {
  constructor() {
    this.video = document.querySelector('[data-video]');
    this.button = document.querySelector('[data-button]');
  }

  init() {
    this.player = new Vimeo.Player(this.video);
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.button.getAttribute('data-button') === 'muting') {
        this._unmuting();
      } else {
        this._muting();
      }
    });
  }

  _unmuting() {
    this.player.setVolume(0.5);
    this.button.setAttribute('data-button', 'unmuting');
  }
  _muting() {
    this.player.setVolume(0);
    this.button.setAttribute('data-button', 'muting');
  }
}
