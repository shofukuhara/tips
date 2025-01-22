import { ancher } from './module/js/page-01';
import { scrollAnimationObserver } from './module/js/page-02';
import { loadAnimation } from './module/js/page-03';
import { splitAnimation } from './module/js/page-04';
import { scrollScale } from './module/js/page-05';
import { splitFadeScroll } from './module/js/page-06';
import { parallax } from './module/js/page-07';
import { Slider } from './module/js/page-08';
import { SplideManager } from './module/js/page-09';
import { HoverImage } from './module/js/page-10';

const page = document.querySelector('[data-page]');
const pageAttribute = page.getAttribute('data-page');
if (pageAttribute === 'page01') {
  const anchor = new ancher();
  anchor.init();
} else if (pageAttribute === 'page02') {
  const fade = new scrollAnimationObserver();
  fade.init();
} else if (pageAttribute === 'page03') {
  new loadAnimation();
} else if (pageAttribute === 'page04') {
  const split = new splitAnimation();
  split.init();
} else if (pageAttribute === 'page05') {
  const scale = new scrollScale();
  scale.init();
} else if (pageAttribute === 'page06') {
  const scrollItem = new splitFadeScroll();
  scrollItem.init();
} else if (pageAttribute === 'page07') {
  const parallaxItem = new parallax();
  parallaxItem.init();
} else if (pageAttribute === 'page08') {
  const slide = new Slider();
  slide.init();
} else if (pageAttribute === 'page09') {
  const slide = new SplideManager();
  slide.init();
} else if (pageAttribute === 'page10') {
  const imageArray = [
    '../../public/assets/images/img_01.jpg',
    '../../public/assets/images/img_02.jpg',
    '../../public/assets/images/img_03.jpg',
    '../../public/assets/images/img_04.jpg',
  ];

  const hoverImage = new HoverImage(
    '[data-trigger-area]',
    '[data-trigger-item]',
    '[data-bg-image]',
    imageArray
  );
  hoverImage.init();
}
