// ==UserScript==
// @name         Kernal Panic
// @namespace    https://github.com/cagen
// @version      0.1
// @description  Kernal Panic Podcast In One Page
// @author       Cagen
// @match        https://kernelpanic.fm
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const titles = Array.from(document.querySelectorAll('.episode h1')).reverse();

  titles.forEach((h, index) => {
    h.id = `title${index + 1}`
    const audio = document.createElement('audio')
    audio.src = `/${index + 1}/audio`
    audio.preload = "none"
    audio.controls = true
    h.parentNode.parentNode.parentNode.appendChild(audio)
  })

  const panel = document.createElement('div')
  panel.innerHTML = `
  <div class="catalog-container">
    <h3>目录 <small><a href="#">返回顶部</a></small></h3>
    <div class="list-container">
      ${titles.map((title, index) => `<div><a href="#title${index + 1}">${title.innerText}</a></div>` ).join('')}
    </div>
  </div>
  <style>
    .catalog-container {
      width: 300px;
      padding: 20px;
      position: absolute;
      right: 3%;
      top: 240px;
      height: 500px;
      font-size: 14px;
      line-height: 1.5;
      border: 1px solid #ccc;
      background: #fcfcfc;
    }

    .catalog-container.fixed {
      position: fixed;
      top: 10px;

    }

    .list-container {
      height: calc(100% - 24px);
      overflow-y: auto;
    }

    body {
      display: flex;
      flex-direction: column-reverse;
    }

    body > header {
      order: 2;
    }

    body > nav {
      order: 1;
    }

    body > .episode {
      width: 35em;
    }

    audio {
      width: 100%;
      margin-top: 20px;
    }
  </style>
  `

  document.body.insertBefore(panel, document.body.children[0])
  document.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
      const catalog = panel.querySelector('.catalog-container')
      if (window.scrollY >= 240) {
        catalog.classList.add('fixed')
      } else {
        catalog.classList.remove('fixed')
      }
    })
  })

})();