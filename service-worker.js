!function () {
    self.addEventListener("fetch", (t => {
        t.respondWith(caches.open("offline" + e).then((async e => {
            try {
                const n = await fetch(t.request);
                return e.put(t.request, n.clone()), n
            } catch (n) {
                const s = await e.match(t.request);
                if (s)
                    return s;
                throw n
            }
        }
        )))

    }
    ))
}();