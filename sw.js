/* Dopamine Menu: keeps the app available offline. Change VERSION when you upload a new index.html. */
var VERSION = "dm-2026-11-26";
var FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(VERSION).then(function(c){ return c.addAll(FILES); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){ return Promise.all(keys.filter(function(k){ return k !== VERSION; }).map(function(k){ return caches.delete(k); })); }).then(function(){ return self.clients.claim(); }));
});
/* Network first so updates arrive; falls back to the saved copy when offline. */
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(function(r){
    var copy = r.clone(); caches.open(VERSION).then(function(c){ c.put(e.request, copy); }); return r;
  }).catch(function(){ return caches.match(e.request).then(function(m){ return m || caches.match("./index.html"); }); }));
});
