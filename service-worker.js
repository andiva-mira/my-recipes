"use strict";var precacheConfig=[["/my-recipes/index.html","4bec714599a11a8a8d3ee3d6af3f1dea"],["/my-recipes/static/css/main.989b06a9.css","5b7bcaa74944bd5c1d6a85f9af1b268e"],["/my-recipes/static/js/main.487ce336.js","8bfd5c1f5ac264b721bc22387ee2c7aa"],["/my-recipes/static/media/balloon.32591cc1.png","32591cc1797d85f6512b20572799eb12"],["/my-recipes/static/media/camera.754b1d2f.svg","754b1d2f7433d2c9adb8c037a19486b5"],["/my-recipes/static/media/close.8cc7d761.svg","8cc7d761a3a3c62632ee17400ef74873"],["/my-recipes/static/media/exit.0b0fbbc5.svg","0b0fbbc59604c63a141c985b40c146a3"],["/my-recipes/static/media/food-bg-1-dark.f292e025.png","f292e02519041e4c75d778042ed348ce"],["/my-recipes/static/media/food-bg-1.8cba3068.png","8cba3068ee57be2bdec0acbfa4395762"],["/my-recipes/static/media/github.37dac434.svg","37dac434ff8e7eec4d47e6451df57d3b"],["/my-recipes/static/media/house.3f2ae35f.svg","3f2ae35fb7e29de566aae942517b5306"],["/my-recipes/static/media/linkedin.f2f851fb.svg","f2f851fba8482de567caa748831c94ca"],["/my-recipes/static/media/logo.57ba5344.png","57ba53441d8fbfecc077a4b3dc8dacf6"],["/my-recipes/static/media/news-icon.df67a40d.png","df67a40dd7fbeaa006a706c5d447c29b"],["/my-recipes/static/media/recipe-w.313f44f0.svg","313f44f0818c2f822459e18b5c0ec281"],["/my-recipes/static/media/recipe.2ba3ab11.svg","2ba3ab112117dd00fa12c3bb2f70d4a3"],["/my-recipes/static/media/salad.d0151bb3.svg","d0151bb37d07847182878eb16285d48f"],["/my-recipes/static/media/search-dark.e692ef41.svg","e692ef41fe3a490e591ca1d727a5de22"],["/my-recipes/static/media/search.7b192060.svg","7b19206069896afb9e41dde9a580f919"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/my-recipes/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});