if(!self.define){let e,t={};const i=(i,r)=>(i=new URL(i+".js",r).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(t[l])return;let o={};const n=e=>i(e,l),c={module:{uri:l},exports:o,require:n};t[l]=Promise.all(r.map((e=>c[e]||n(e)))).then((e=>(s(...e),o)))}}define(["./workbox-b4dd5142"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"main.js",revision:"20eb726507e028b39f5b7e5ee5e4e1ae"},{url:"manifest.json",revision:"d7f02be6c0fa9f68f343c9b367abbebb"},{url:"style.css",revision:"0dd8a1792b7c69165faf0b1f37244686"},{url:"templates/footer.html",revision:"e68eab29d8c66402b975f03b678a48fb"},{url:"templates/header-login.html",revision:"8c2d618fc8e2b781ecb519d3ce2d8018"},{url:"templates/header-welcome.html",revision:"7c6ae5c177f67a7c7059e9053488a7b6"},{url:"templates/index.html",revision:"af5c01683f95831dcad6aa83d45dbbdb"},{url:"templates/logging-out.html",revision:"67b126f463b0ad3035454c628cde9440"},{url:"templates/menu.html",revision:"b6e51fd5782352266033038b9520982b"},{url:"templates/welcome.html",revision:"f7f65e2c4f2af7d0fd962e897c1e732b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
