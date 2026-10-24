// Service worker of the English–Romagnolo dictionary. Increase VERSIONE with every new edition.
const VERSIONE = 'dizionario-en-v3';
const BASE_FILES = ['./', './index.html', './dizionario_en.json', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSIONE).then(c => c.addAll(BASE_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('dizionario-en-') && k !== VERSIONE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Network first, cache as a fallback: online you always see the latest edition, offline the app still works.
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r).then(resp => {
      if (resp && resp.ok) { const copia = resp.clone(); caches.open(VERSIONE).then(c => c.put(r, copia)); }
      return resp;
    }).catch(() => caches.match(r).then(m => m || (r.mode === 'navigate' ? caches.match('./index.html') : undefined)))
  );
});
