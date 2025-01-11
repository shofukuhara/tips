import { ancher } from './module/anchor';
import { scrollAnimationObserver } from './module/fade';
// import { load } from './module/load';
import { item } from './module/asynchronous';

const anchor = new ancher();
anchor.init();

const fade = new scrollAnimationObserver();
fade.init();

item();
