import { ancher } from './module/js/page-01';
import { scrollAnimationObserver } from './module/js/page-02';
import { loadAnimation } from './module/js/page-03';
import { splitAnimation } from './module/js/page-04';
import { scrollScale } from './module/js/page-05';

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
}
