// ==UserScript==
// @name        Anti RYF Anti-Anti-Ads Scripts
// @namespace    https://github.com/cagen
// @version      0.1
// @description  Sorry, I really don't like ads
// @author       Cagen
// @match        https://www.ruanyifeng.com/blog/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const link = document.createElement('link');
  link.setAttribute('href', '/static/themes/theme_scrapbook/theme_scrapbook.min.css');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  document.body.appendChild(link);
})();