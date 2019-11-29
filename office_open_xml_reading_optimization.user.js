// ==UserScript==
// @name         Office Open XML Reading Optimization
// @namespace    https://github.com/cagen
// @version      0.1
// @description  optimize office open xml reading experience
// @author       Cagen
// @match        http://officeopenxml.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style')
  style.innerHTML = `
    #mainContent {
      font-family: sans-serif;
      line-height: 1.7;
    }

    body {
      transform: scale(1.5);
      transform-origin: top center;
    }
  `
  document.body.append(style)
})();

