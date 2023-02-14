self.addEventListener("install", (event) => {

})

self.addEventListener("activate", (event) => {

})

self.addEventListener("fetch", (event) => {

    // for everything else, try the network first, falling back to
    // cache if the user is offline. (If the pages never change, you
    // might prefer a cache-first approach to a network-first one.)
    event.respondWith(
        caches.open(`offline`).then(async (cache) => {
            console.log(event.request)
            try {
                const response = await fetch(event.request)
                cache.put(event.request, response.clone())
                return response
            } catch (err) {
                const response = await cache.match(event.request)
                if (response) return response

                throw err
            }
        }),
    )
})