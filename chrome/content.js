'use strict';

// Injecting js and css for more clarity in dev tools
// See comment here: https://blog.lateral.io/2016/04/create-chrome-extension-modify-websites-html-css/#comment-3698139301

function injectScript(file, node) {
  var th = document.body;
  var s = document.createElement('script');
  s.setAttribute('src', file);
  th.appendChild(s);
}
injectScript(chrome.extension.getURL('overlay.js'), 'body');

function injectStyles(file, node) {
  var th = document.body;
  var s = document.createElement('link');
  s.rel = 'stylesheet'
  s.setAttribute('href', file);
  th.appendChild(s);
}
injectStyles(chrome.extension.getURL('style.css'), 'body');
