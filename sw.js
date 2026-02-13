self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("meritz-cache-v1").then((cache) => {
      return cache.addAll([
        "./",
        "calculator_upgraded_v3.html",
        "manifest.json",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
