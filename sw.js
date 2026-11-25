// 설치 조건을 맞추기 위한 최소 서비스 워커입니다.
// 캐시를 사용하지 않고 항상 네트워크에서 가져오므로, 업데이트한 내용이 바로 반영됩니다.
self.addEventListener("install", event => { self.skipWaiting(); });
self.addEventListener("activate", event => { event.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
