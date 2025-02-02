import { Ancher } from './module/js/page-01';
import { ScrollAnimationObserver } from './module/js/page-02';
import { SplitAnimation } from './module/js/page-04';
import { ScrollScale } from './module/js/page-05';
import { Parallax } from './module/js/page-07';
import { Slider } from './module/js/page-08';
import { SplideManager } from './module/js/page-09';
import { HoverImage } from './module/js/page-10';
import { FvAnimation } from './module/js/page-11';
import { FvPromiseAnimation } from './module/js/page-12';
import { StickyScale } from './module/js/page-13';
import { Accordion } from './module/other/page-01';
import { Canvas } from './module/js/page-14';

const page = document.querySelector('[data-page]');
const pageAttribute = page.getAttribute('data-page');
if (pageAttribute === 'page01') {
  const anchor = new Ancher();
  anchor.init();
} else if (pageAttribute === 'page02') {
  const fade = new ScrollAnimationObserver();
  fade.init();
} else if (pageAttribute === 'page03') {
  new loadAnimation();
} else if (pageAttribute === 'page04') {
  const split = new SplitAnimation();
  split.init();
} else if (pageAttribute === 'page05') {
  const scale = new ScrollScale();
  scale.init();
} else if (pageAttribute === 'page06') {
  const scrollItem = new SplitFadeScroll();
  scrollItem.init();
} else if (pageAttribute === 'page07') {
  const parallaxItem = new Parallax();
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
} else if (pageAttribute === 'page11') {
  const fv = new FvAnimation();
  fv.init();
} else if (pageAttribute === 'page12') {
  const fvAnimation = new FvPromiseAnimation();
  fvAnimation.init();
} else if (pageAttribute === 'page13') {
  const scale = new StickyScale();
  scale.init();
} else if (pageAttribute === 'other01') {
  const accordionItem = new Accordion();
  accordionItem.init();
} else if (pageAttribute === 'page14') {
  const draw = new Canvas();
  draw.init();
}
