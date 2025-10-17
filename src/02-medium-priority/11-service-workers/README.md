# Use Service Workers

You are using Service Workers in your PWA to cache data or execute possible heavy tasks without impacting the user experience of your application.

**Free Resources**

* [articleService Workers: an Introduction | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/primers/service-workers/)
* [articleMeasuring the Real-world Performance Impact of Service Workers | Web | Google Developers](https://developers.google.com/web/showcase/2016/service-worker-perf)
* [articleWhat Are Service Workers and How They Help Improve Performance](https://www.keycdn.com/blog/service-workers/)
* [articleHow does a service worker work? - YouTube](https://www.youtube.com/watch?v=__xAtWgfzvc)

## Demo
Try the basic demo (requires HTTPS or localhost): [service-worker-demo.html](./service-worker-demo.html)

It registers `sw.js` and demonstrates:
- Install/activate lifecycle with cache versioning
- Precache local assets and cache-first for static files
- Network-first strategy for navigations/pages
- Controls to update/unregister and clear caches
