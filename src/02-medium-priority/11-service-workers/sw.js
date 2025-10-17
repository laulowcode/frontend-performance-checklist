// Minimal service worker demonstrating install/activate, cache versioning,
// cache-first for static assets, and network-first for pages/API.

const CACHE_VERSION = 'v1';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

// Precache demo assets and some images for offline use
const PRECACHE_URLS = [
  './service-worker-demo.html',
  './sw.js',
  // Pre-cache some images for offline demo
  'https://images.unsplash.com/photo-1503264116251-35a269479413?w=400&auto=format&fit=crop&q=70',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=70'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => ![STATIC_CACHE, RUNTIME_CACHE].includes(k)).map((k) => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// Helper: classify requests
function isNavigationRequest(request) {
  return request.mode === 'navigate';
}

function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    url.origin === self.location.origin && /\.(?:css|js|png|jpg|jpeg|gif|svg|webp|avif|ico|woff2?)$/i.test(url.pathname)
  ) || url.hostname === 'images.unsplash.com';
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Network-first for navigations (HTML/pages)
  if (isNavigationRequest(request)) {
    event.respondWith(
      fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
        return response;
      }).catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for same-origin static assets and images
  if (isStaticAsset(request)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          const copy = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy));
          return response;
        }).catch(() => {
          // If network fails and no cache, return a fallback for images
          if (request.url.includes('images.unsplash.com')) {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="#f0f0f0"/><text x="200" y="100" text-anchor="middle" fill="#666" font-family="Arial" font-size="14">Image unavailable offline</text></svg>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          }
          throw new Error('Network failed and no cache available');
        });
      })
    );
    return;
  }

  // Default: pass-through
});


