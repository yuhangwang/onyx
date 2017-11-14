"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","2bbbb6aeb7d4dce316c8545e023b60aa"],["/static/css/main.754dcb7b.css","97d88047694ef234e67594788bc08693"],["/static/js/main.1c18e9d0.js","f6b8395cc058098b2d526a26218f16d2"],["/static/media/Muli-Bold.03c3ebc1.woff2","03c3ebc1b575991ec582751b6b98e562"],["/static/media/Muli-Regular.f0e1ee92.woff2","f0e1ee92a25c8246a4a1fc28b3f77084"],["/static/media/Muli-SemiBold.d0c20b36.woff2","d0c20b36cf1fedcf75230805055f517b"],["/static/media/Poppins-Medium.08609a01.woff2","08609a017d830988630ee1b38a7ef71a"],["/static/media/Poppins-Regular.ce0c9ae0.woff2","ce0c9ae08840a0b43bccb9f5a86e155d"],["/static/media/Poppins-SemiBold.d01ac68c.woff2","d01ac68c4747e41a359cd94cecc29f9f"],["/static/media/checkmark.5abb300b.svg","5abb300b4a10ca88db89e902b81a3528"],["/static/media/circled-cross.a34c23d3.svg","a34c23d3c8fbd73af8ae777800fbfd73"],["/static/media/download.95ec0c6f.svg","95ec0c6f96607c2aa468b8e495d7dd1c"],["/static/media/file-dark.d0e5f650.svg","d0e5f65060b22bb1b98dd2c4711475ab"],["/static/media/file-red.cf3519a0.svg","cf3519a04eaeda8e3e4b2e5c0cbea209"],["/static/media/file.82baf0e6.svg","82baf0e62f87403a3824e5fdd17dea82"],["/static/media/flash-blue.6e44a3fa.svg","6e44a3faa11d42c158522fa7459e665a"],["/static/media/flash-gray.772e7602.svg","772e7602a10ba3d5ab4bdbfc5f829ffc"],["/static/media/flash-red.b61a3cb6.svg","b61a3cb600953e4d9fcb225c32e0ae76"],["/static/media/generic-file.19ce4c33.svg","19ce4c330163c9596429b247d202f104"],["/static/media/mainframe-logo.366dae0c.svg","366dae0c792d3a683a92ade8b2f0a0f3"],["/static/media/mask-blue.a82e0108.svg","a82e0108eb874429a29e74190ad0d85d"],["/static/media/mask-gray.128be9c4.svg","128be9c4e049730f68fd3baabca8d250"],["/static/media/mask-red.f29c0da2.svg","f29c0da25ffa80c03ae33f3a9e1e012b"],["/static/media/pdf.f935e0b8.svg","f935e0b8f4d72835be027e837c5eb185"],["/static/media/plus.6f3c85fe.svg","6f3c85fecfd42b7c70522d017263e408"],["/static/media/red-close.f344f4e2.svg","f344f4e21c54381bfbe63ef84870cb04"],["/static/media/see-qr.9d7d4ea2.svg","9d7d4ea2bc1cb3fcf1db556be88cbaad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});