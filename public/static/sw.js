if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UNMGI2w1vD34f-W0MS2M2/_buildManifest.module.js",revision:"be3ef894c284d93d79d7504054d28a61"},{url:"/_next/static/UNMGI2w1vD34f-W0MS2M2/_ssgManifest.module.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/framework.2c706b4ee017050d628e.module.js",revision:"f9fd91acb6d8ffb83a600ca80eb15a05"},{url:"/_next/static/chunks/main-1408762607821397212e.module.js",revision:"922b2d14e39eae75ed1e03c1349534fe"},{url:"/_next/static/chunks/pages/_app-834b602b31bf03dc27c7.module.js",revision:"73d55d4744c18e9327e95c1d815e4f64"},{url:"/_next/static/chunks/pages/_error-be4de56162f9e0b725cc.module.js",revision:"dea267819def18c960f0ebde95b79888"},{url:"/_next/static/chunks/pages/about-a89bdda9380dd72aa0cc.module.js",revision:"fd80824920402b66099827688605b0f4"},{url:"/_next/static/chunks/pages/index-c185e33ad8ac6d945a33.module.js",revision:"6d3279268ffce81bd77b335664f270d3"},{url:"/_next/static/chunks/polyfills-36bde18dcfde0c144be5.module.js",revision:"397c85ef30c5713019050f22bf9216c9"},{url:"/_next/static/chunks/webpack-07c5bcab23dc3e52a7c0.module.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/4453185e3a312805feeb.css",revision:"dacada9ef5cee520eddb1c9fb49cb604"},{url:"/manifest.json",revision:"f860e6f54e122af97efc167fa8e6af7c"},{url:"/static/icons/android-chrome-192x192.png",revision:"57dd892f1d2c425de95a310ea7ff93da"},{url:"/static/icons/android-chrome-512x512.png",revision:"9113735126de4328048ac59e639c67d3"},{url:"/static/icons/apple-touch-icon.png",revision:"48c0d3a107d82ecab2e5d44792867c0f"},{url:"/static/icons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/static/icons/favicon-16x16.png",revision:"b4dc59b1ac46cd605232b358e61d70ff"},{url:"/static/icons/favicon-32x32.png",revision:"53dee10b7fb9ff6af45aea0055ebf980"},{url:"/static/icons/favicon.ico",revision:"a795b76e05f8a7d4f08238130b8c9fc4"},{url:"/static/icons/mstile-144x144.png",revision:"ad0b6bf72bfa088b084a53caeb43fff3"},{url:"/static/icons/mstile-150x150.png",revision:"aee229c0e7f0769886456abdae88023d"},{url:"/static/icons/mstile-310x150.png",revision:"bad2edca1ed998c1e50593c9fc7cc425"},{url:"/static/icons/mstile-310x310.png",revision:"e4a775da0e5c102d2f52c877c01c66b1"},{url:"/static/icons/mstile-70x70.png",revision:"5e73c469248429ef4f6fa08a346ba8a6"},{url:"/static/icons/safari-pinned-tab.svg",revision:"400807115f69886e5b4a4a2ada09bb60"},{url:"/static/icons/site.webmanifest",revision:"75cfcae5d8d8c7bed2b128bebe430367"},{url:"/static/manifest.json",revision:"f860e6f54e122af97efc167fa8e6af7c"},{url:"/static/sw.js",revision:"b6d701b955cdd306ef2703843f3ae6ca"},{url:"/static/workbox-432e0d0b.js",revision:"13b3a60ae43ee30624e7dafda7b0a997"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));