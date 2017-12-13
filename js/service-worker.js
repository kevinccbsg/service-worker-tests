
const cacheName = 'v2';
const cacheFiles = [
  '/',
  '/index.html',
  '/css/reset.css',
  '/css/style.css',
  '/js/app.js',
  'https://fonts.googleapis.com/css?family=Roboto',
];

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Installed');

  e.waitUntil(
    caches.open(cacheName)
    .then((cache) => {
      console.log('[serviceWorker] Caching caheFiles');
      return cache.addAll(cacheFiles);
    }).catch(err => console.error(err))
  );

});

self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activated');

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((thisCacheName) => {
          if (thisCacheName !== cacheName) {
            console.log(`[serviceWorker] Removing cache files from ${thisCacheName}`);
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker] Fetching', e.request.url);
});
