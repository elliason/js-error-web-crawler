!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("xml-js")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("puppeteer")},function(e,t,o){"use strict";(function(e){var n=o(5),r=o.n(n),a=o(6),s=o.n(a);t.a=t=>{const o=r.a.resolve(e,"../logs"),n=new Date,a=`log_${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}--${n.getHours()}-${n.getMinutes()}-${n.getSeconds()}`,i=JSON.stringify(t);s.a.writeFile(o+"/"+a+".json",i,(function(e){e&&console.log("error while writing logs file",e)}))}}).call(this,"/")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(1),s=o.n(a);const i=e=>e.reduce((e,t)=>{if("url"!==t.name||0===t.elements.length)return;const o=t.elements.find(e=>e.name="loc");if(!o)return;const n=o.elements.find(e=>"text"===e.type);if(!n)return;const r=n.text;return e.push(r),e},[]);var u=e=>s.a.xml2js(e).elements.filter(e=>"urlset"===e.name).reduce((e,t)=>(t.elements.length>0&&(e=e.concat(i(t.elements))),e),[]),c=o(2),l=o(3),f=o.n(l);const p=async e=>{const t=[],o=await f.a.launch({args:["--no-sandbox","--disable-setuid-sandbox"]}),n=await o.newPage();n.on("error",o=>{t.push({type:"error",errorData:o}),console.log("page on error",o,e)}),n.on("pageerror",o=>{t.push({type:"pageerror",errorData:o}),console.log("page on pageerror",o,e)});const r=await n.goto(e,{waitUntil:"load"});await n.waitFor(1e3);const a=Math.random().toString(36).substring(7);return await n.screenshot({path:"screenshots/"+a+"_screenshot.png"}),await o.close(),{url:e,responseCode:r.status(),logs:t}};var d=async e=>{console.log("urls array",e);const t=[];for(let o=0;o<e.length;o++){const n=e[o];t.push(await p(n)),console.log("page processed",n)}return t},g=o(4);var v=e=>{const t=["uzitecne-odkazy/slovnik-pojmu","/osobni/volani/roaming","/o-vodafonu/ke-stazeni/osobni-a-firemni/archiv/","/o-vodafonu/o-spolecnosti/pro-media/tiskove-zpravy/","/podminky/podminky-doplnkovych-sluzeb/","/podminky/nabidky-a-akce/","/o-vodafonu/ke-stazeni/osobni-a-firemni/souteze-pravidla-a-podminky/","/about-vodafone/press-releases/message-detail/"];return e.filter(e=>{let o=!0;return t.forEach(t=>{-1!==e.indexOf(t)&&(o=!1)}),o})};(async()=>{r()("https://www.vodafone.cz/webs/vodafonecz/seo_data/sitemap-vodafonecz-final.xml").then(e=>e.text()).then(e=>{const t=u(e),o=v(t).map(e=>e.replace("www.vodafone.cz","vf-5058-assets-build-refactoring.vodafonecz.devbox.dev.cz"));return d(o)}).then(e=>{console.log("test log",Object(c.inspect)(e,{colors:!0,depth:10})),Object(g.a)(e)})})()}]);