if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_wnnXuK9ojJ8T4fRUwQZc/_buildManifest.js",revision:"702b8c5109e442c90f1195c76a1a4688"},{url:"/_next/static/_wnnXuK9ojJ8T4fRUwQZc/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/149d3907ebe071399da6427dcbeb9611f00dd166.a96ed59a489a87ba234a.js",revision:"63002115506ec43fc0cfca2c587edc6b"},{url:"/_next/static/chunks/framework.ddd926c7cdd335f609ac.js",revision:"eecb6700665c0f72fce6a602ba2ea56f"},{url:"/_next/static/chunks/main-1f5edfa3ca746be0adcc.js",revision:"a5faac036349bc843ad262e08cd5a874"},{url:"/_next/static/chunks/pages/_app-a13efb470927e9d3973e.js",revision:"7efdc9560ce7c9574afa12de9132b3a1"},{url:"/_next/static/chunks/pages/_error-f951d89e936730b65cd8.js",revision:"837154019e8e2e13b7419907f4d92533"},{url:"/_next/static/chunks/pages/about-e5022cd44cb1a7771a4c.js",revision:"b60c3796366a48771febb3ef59adcfd5"},{url:"/_next/static/chunks/pages/blog-ee281179847d4f51f7dc.js",revision:"77e4d21baf4cff25dded49763d0aa1d7"},{url:"/_next/static/chunks/pages/blog/post-1-bb769762b07fed0ad996.js",revision:"9c77546d2526bf07206ec988d664e5bc"},{url:"/_next/static/chunks/pages/blog/post-2-49ffcd803cc3676a9e2c.js",revision:"30387e45e669a0459542510145e15d6c"},{url:"/_next/static/chunks/pages/blog/post-3-2df156eb78909266bee4.js",revision:"de11872e34a2dffa32cfc902a4b4d373"},{url:"/_next/static/chunks/pages/blog/post-4-c0f3fa92164d6afba4a9.js",revision:"82ca8ec46b5aeb858459430aed82bdf9"},{url:"/_next/static/chunks/pages/index-d849244c80aa3aeeb138.js",revision:"9440f5a34f9b6bfca98d98f618aa3a4e"},{url:"/_next/static/chunks/polyfills-83732ebf2ed7f8a1b2c7.js",revision:"1e875a6bcb0993effb274df712fd9a46"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/2e61ed2181d0c4f294b4.css",revision:"e5eeb9a6f92e8f7428b42f5a6bf5bf89"},{url:"/manifest.json",revision:"0f9e67e34e4b910b0da294028c455744"},{url:"/static/icons/android-chrome-192x192.png",revision:"a53413da1262dfe01c3735bda263e9c6"},{url:"/static/icons/android-chrome-512x512.png",revision:"6646ef4e35ddc396132d42b9a7b53638"},{url:"/static/icons/apple-touch-icon.png",revision:"22c9800c95c41a90ecfd48f30b866e43"},{url:"/static/icons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/static/icons/favicon-16x16.png",revision:"8d141f86c84b12fa5b1e771040499db6"},{url:"/static/icons/favicon-32x32.png",revision:"73b56295f3ecbd4e1ff4e4d4295450a9"},{url:"/static/icons/favicon.ico",revision:"a795b76e05f8a7d4f08238130b8c9fc4"},{url:"/static/icons/maskable_icon.png",revision:"455176076ea8cd170fab90e0ae822a96"},{url:"/static/icons/mstile-144x144.png",revision:"f0cc02e989e4a07e52b6f58471d8e763"},{url:"/static/icons/mstile-150x150.png",revision:"3deeffc25fc6165655f180383f0fe2f6"},{url:"/static/icons/mstile-310x150.png",revision:"2063a397cca56bc4fe862561e562bc3f"},{url:"/static/icons/mstile-310x310.png",revision:"83fe23a2970213be5ac25191b56aeb39"},{url:"/static/icons/mstile-70x70.png",revision:"fd5db5a510bc123c5cd9d9209f768fa3"},{url:"/static/icons/safari-pinned-tab.svg",revision:"400807115f69886e5b4a4a2ada09bb60"},{url:"/static/icons/site.webmanifest",revision:"a9fbb136212da3c799b53c4a9ace9788"},{url:"/static/icons/tomhermans_bol.svg",revision:"c6f1ec614cb9478240dbe8a8b0b987a3"},{url:"/static/manifest.json",revision:"f5c16c0dd961553de2cb67fdb4663a60"},{url:"/static/sw.js",revision:"b25e7995696e19cc6e6afeeda613139f"},{url:"/static/workbox-432e0d0b.js",revision:"13b3a60ae43ee30624e7dafda7b0a997"},{url:"/theme.js",revision:"995c6a99c6afb4b2675e41d5d635e637"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
