// ==UserScript==
// @name         Image Download
// @namespace    https://github.com/cagen
// @version      0.1
// @description  Download Image and Compress as Zip file.
// @author       Cagen
// @match        https://example.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  start();
})();

// 插入 JSZip 代码
async function insertScript () {
  const promise = new Promise(resolve => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.2/jszip.js';
    document.body.appendChild(script);
    script.addEventListener('load', resolve);
  })
  return promise;
}

// 拉取图片，塞入 JSZip 对象中
async function fetchImage (src, imgName, zip) {
  const resp = await fetch(src);
  const blob = await resp.blob();
  zip.file(imgName, blob, { blob: true });
}

// 创建下载链接
async function createDownloadLink (filename, zip, anchor) {
  const content = await zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: {
      level: 9
    }
  });
  const url = window.URL.createObjectURL(content);
  anchor.href = url;
  anchor.download = filename;
  anchor.textContent = '下载';
  anchor.style.backgroundColor = '#50d890';
}

// 开始准备打包工作
async function startPackage (anchor) {
  await insertScript();
  // 因为加载的是 UMD，所以碰到有些网站使用了类似 AMD 的方式来引用时，此处应该需要多做一些判断
  const zip = new JSZip();
  const { imgArr, fileName } = getImageSource();
  await Promise.all(imgArr.map(({src, name}) => fetchImage(src, name, zip)));
  await createDownloadLink(fileName, zip, anchor);
}

function start () {
  const anchor = document.createElement('a');
  let mount = false;
  anchor.textContent = '准备';
  anchor.style = `
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 9999;
    display: block;
    width: 50px;
    height: 30px;
    line-height: 30px;
    background-color: #eb463c;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    transition: .3s background-color ease-out;
    cursor: pointer;
  `;
  document.body.append(anchor);
  anchor.addEventListener('click', () => {
    if (!mount) {
      startPackage(anchor);
      mount = true;
    }
  });
}

// 获取图片数据，作者/文件名称，需要根据需求定制
function getImageSource () {
  const imgArr = Array.from(document.getElementsByTagName('img')).map((img) => {
    const paths = img.src.split('/');
    const src = img.src.split(':').slice(1);
    return {
      src,
      name: paths[paths.length - 1],
    }
  });
  const fileName = 'Example';
  return { imgArr, fileName }
}