import { ancher } from './module/anchor';
import { scrollAnimationObserver } from './module/fade';

const anchor = new ancher();
anchor.init();

const fade = new scrollAnimationObserver();
fade.init();
