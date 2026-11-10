/* Check-In Scan moved to Vehicle Scan (https://littlecountrycars.github.io/lcc-vehicle-scan/).
   This worker replaces the old one: it removes the old offline copy (only this app's own) and unregisters itself. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    try { await caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('lcc-scan-')).map((k) => caches.delete(k)))); } catch (x) {}
    await self.registration.unregister();
    const cs = await self.clients.matchAll({ type: 'window' });
    cs.forEach((c) => { try { c.navigate('https://littlecountrycars.github.io/lcc-vehicle-scan/?mode=checkin'); } catch (x) {} });
  })());
});
