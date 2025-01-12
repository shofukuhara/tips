import { ancher } from './module/js/page-01';
import { scrollAnimationObserver } from './module/js/page-02';
import { loadAnimation } from './module/js/page-03';

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
}
