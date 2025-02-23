import gsap from 'gsap';

// export class NavColorChange {
//   constructor() {
//     this.areaList = [...document.querySelectorAll('[data-area]')];
//     this.itemList = [...document.querySelectorAll('[data-item]')];
//     this.currentIndex = null;
//   }

//   get areaPositions() {
//     return this.areaList.map((area) => ({
//       top: area.getBoundingClientRect().top + window.scrollY,
//       height: area.offsetHeight,
//     }));
//   }

//   init() {
//     ['DOMContentLoaded', 'resize', 'scroll'].forEach((event) => {
//       window.addEventListener(event, () => {
//         this._checkPosition();
//       });
//     });
//   }

//   _checkPosition() {
//     const scrollPos = window.scrollY;
//     this.areaPositions.forEach((area, index) => {
//       const areaStart = area.top;
//       const areaEnd = area.top + area.height;
//       if (scrollPos >= areaStart && scrollPos < areaEnd) {
//         if (this.currentIndex !== index) {
//           this.currentIndex = index;
//           this._updateNavColor(index);
//         }
//       }
//     });
//   }

//   _updateNavColor(activeIndex) {
//     this.itemList.forEach((item, index) => {
//       if (index === activeIndex) {
//         gsap.to(item, { color: '#fff', duration: 0.3 });
//       } else {
//         gsap.to(item, { color: '#000', duration: 0.3 });
//       }
//     });
//   }
// }

import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class NavColorChange {
  constructor() {
    this.areaList = [...document.querySelectorAll('[data-area]')];
    this.itemList = [...document.querySelectorAll('[data-item]')];

    if (this.itemList.length > 0) {
      gsap.set(this.itemList[0], { color: '#fff' });
    }
  }

  init() {
    this.areaList.forEach((area, index) => {
      ScrollTrigger.create({
        trigger: area,
        start: 'top top',
        end: 'bottom top',
        markers: true,
        onEnter: () => this._updateNavColor(index),
        onEnterBack: () => this._updateNavColor(index),
      });
    });
  }

  _updateNavColor(activeIndex) {
    this.itemList.forEach((item, index) => {
      if (index === activeIndex) {
        gsap.to(item, { color: '#fff', duration: 0.3 });
      } else {
        gsap.to(item, { color: '#000', duration: 0.3 });
      }
    });
  }
}
