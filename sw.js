const CACHE_NAME = 'bike-trip-planner-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './route_data.js',
    './img/basin.png',
    './img/wetland.png',
    './img/shanzhuhu.png',
    './img/oldstreet.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            // Ignore if some fail to fetch
            return cache.addAll(ASSETS).catch(err => console.warn('Cache addAll warning:', err));
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
