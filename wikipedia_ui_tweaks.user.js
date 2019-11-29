// ==UserScript==
// @name         Wikipedia UI Tweaks
// @namespace    https://github.com/cagen
// @version      0.1
// @description  Make Wikipedia looks better
// @author       Cagen
// @match        https://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const style = document.createElement('style')
  style.innerHTML = `
    .mw-body-content { font-size: 1em }
  `
  document.head.appendChild(style)
})();
