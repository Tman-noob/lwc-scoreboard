const CACHE_NAME = 'scoreboard-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/index.js',
  '/lwc_logo-192x192.png',
  '/lwc_logo-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
