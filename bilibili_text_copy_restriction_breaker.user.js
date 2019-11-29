// ==UserScript==
// @name         Bilibili Text Copy Restrictions Breaker
// @namespace    https://github.com/cagen
// @version      0.1
// @description  Remove Bilibili Zhuanlan Text Copy Restrictions
// @author       Cagen
// @match        https://www.bilibili.com/read/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var style = document.createElement('style');
  style.innerHTML = `.unable-reprint { user-select: initial !important; }`;
  document.head.appendChild(style);

  var old_elements = document.querySelectorAll(".unable-reprint");
  for (var i = 0, len = old_elements.length; i < len; i++) {
    var old_element = old_elements[i];
    old_element.classList.remove('unable-reprint');
  }
})();
