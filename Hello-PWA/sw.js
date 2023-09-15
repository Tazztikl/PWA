var cacheName = 'hello-pwa';
var filesToCache = [
  '/~tatuti/Web_kehityksen_perusteet/pwa/Hello-PWA/',
  '/~tatuti/Web_kehityksen_perusteet/pwa/Hello-PWA/index.html',
  '/~tatuti/Web_kehityksen_perusteet/pwa/Hello-PWA/css/style.css',
  '/~tatuti/Web_kehityksen_perusteet/pwa/Hello-PWA/js/main.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(cacheName);
        await cache.addAll(filesToCache);
      } catch (error) {
        console.error('Error', error);
      }
    })()
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    (async () => {
      try {
        const response = await caches.match(e.request);
        return response || fetch(e.request);
      } catch (error) {
        console.error('Error', error);
      }
    })()
  );
});

