if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}})).then(e=>{const s=c(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2OuvQAEk0_JJZlFH53kpM/_buildManifest.js",revision:"c2386130f42923564542ce0204d9f8dd"},{url:"/_next/static/2OuvQAEk0_JJZlFH53kpM/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/framework.90224be4396d5875be65.js",revision:"df4fb1429f0d54f26543841e40f6285b"},{url:"/_next/static/chunks/main-0c7dcb61e0661225d326.js",revision:"2b2d222daac913347e91b74c7b0b3b05"},{url:"/_next/static/chunks/pages/_app-9b50fac6db3e825e5b81.js",revision:"44ba410a3b773fce65e14193b52f01b6"},{url:"/_next/static/chunks/pages/_error-7546237034bdd05f5922.js",revision:"69891b11dc5608fd11c59c96cefd0988"},{url:"/_next/static/chunks/pages/about-0e09b91418ab690f0e22.js",revision:"3d50a067bcba9cb871b70b8555e82c5f"},{url:"/_next/static/chunks/pages/index-8c75ac4e7a0bd8430bc1.js",revision:"3bfeb0e4f8a8a305b7f596b4d2bf6548"},{url:"/_next/static/chunks/polyfills-36bde18dcfde0c144be5.js",revision:"3c5b148baecf222e205dfe1cb1588bd6"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/d64f9a202e0a6e70f341.css",revision:"bf0d2142e1b157628905f36d1c161164"},{url:"/manifest.json",revision:"2f9a1610c2c89da85b9a610f4f40415d"},{url:"/static/icons/android-chrome-192x192.png",revision:"57dd892f1d2c425de95a310ea7ff93da"},{url:"/static/icons/android-chrome-512x512.png",revision:"9113735126de4328048ac59e639c67d3"},{url:"/static/icons/apple-touch-icon.png",revision:"48c0d3a107d82ecab2e5d44792867c0f"},{url:"/static/icons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/static/icons/favicon-16x16.png",revision:"b4dc59b1ac46cd605232b358e61d70ff"},{url:"/static/icons/favicon-32x32.png",revision:"53dee10b7fb9ff6af45aea0055ebf980"},{url:"/static/icons/favicon.ico",revision:"a795b76e05f8a7d4f08238130b8c9fc4"},{url:"/static/icons/maskable_icon.png",revision:"fad52417500e1443ae06e6c5dab043e5"},{url:"/static/icons/mstile-144x144.png",revision:"ad0b6bf72bfa088b084a53caeb43fff3"},{url:"/static/icons/mstile-150x150.png",revision:"aee229c0e7f0769886456abdae88023d"},{url:"/static/icons/mstile-310x150.png",revision:"bad2edca1ed998c1e50593c9fc7cc425"},{url:"/static/icons/mstile-310x310.png",revision:"e4a775da0e5c102d2f52c877c01c66b1"},{url:"/static/icons/mstile-70x70.png",revision:"5e73c469248429ef4f6fa08a346ba8a6"},{url:"/static/icons/safari-pinned-tab.svg",revision:"400807115f69886e5b4a4a2ada09bb60"},{url:"/static/icons/site.webmanifest",revision:"a9fbb136212da3c799b53c4a9ace9788"},{url:"/static/manifest.json",revision:"f5c16c0dd961553de2cb67fdb4663a60"},{url:"/static/sw.js",revision:"b25e7995696e19cc6e6afeeda613139f"},{url:"/static/workbox-432e0d0b.js",revision:"13b3a60ae43ee30624e7dafda7b0a997"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
