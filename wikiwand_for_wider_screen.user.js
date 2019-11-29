// ==UserScript==
// @name         Wikiwand for Wider Screen
// @namespace    http://github.com/cagen
// @version      0.1
// @description  Widen the width limit of the wikiwand for wider screen
// @author       Cagen
// @match        https://www.wikiwand.com/*
// @grant        none

// ==/UserScript==

(function() {
  'use strict';
  const article = document.getElementById('article_content_wrapper')
  article.style.maxWidth = '76%'
})();
