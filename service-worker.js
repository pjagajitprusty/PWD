// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js',{scope : '/jsmeetup/'}).then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}


var cacheName = 'V-1';
var filesToCache = [
  '/', '/index.html',
  '/css/all.css', '/css/material.min.css',
  '/js/all.js', '/js/material.min.js',
  '/images/service-worker-1.png','/images/service-worker-2.png','/images/service-worker-3.png',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installing');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache
              .addAll(filesToCache) //this is atomic in nature i.e. if any of the file fails the entire cache step fails.
              .then(() => {console.log('[ServiceWorker] App shell Caching  Successful');})
              .catch(() => {console.log('[ServiceWorker] App shell Caching  Failed');})
    })
  );
});


self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

// Basic Caching strategy
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
