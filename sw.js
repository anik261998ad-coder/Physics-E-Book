/* Offline support. Bump VERSION whenever you upload a new index.html. */
const VERSION = "v1";
const CACHE = "physics-ebook-" + VERSION;
const PRECACHE = ["./", "index.html", "manifest.webmanifest", "fonts/fonts.css",
  "fonts/noto-sans-bengali-bengali-wght-normal.woff2", "fonts/noto-sans-bengali-latin-wght-normal.woff2",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("physics-ebook-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Cached copy first (works offline), refreshed in the background for next time.
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(r, {ignoreSearch: true});
    const net = fetch(r).then(res => { if (res && res.ok) cache.put(r, res.clone()); return res; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || (r.mode === "navigate" ? cache.match("index.html") : Response.error());
  }));
});
