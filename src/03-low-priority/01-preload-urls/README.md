# Preload URLs

> Popular browsers can use directive on `<link>` tag and `"rel"` attribute with certain keywords to pre-load specific URLs

Prefetching allows a browser to silently fetch the necessary resources needed to display content that a user might access in the near future. The browser is able to store these resources in its cache and speed up the way web pages load when they are using different domains for page resources. When a web page has finished loading and the idle time has passed, the browser begins downloading other resources. When a user go in a particular link (already prefetched), the content will be instantly served.

## Demo
See practical examples of <code>preload</code>, <code>modulepreload</code>, <code>preconnect</code>, and <code>prefetch</code>: [preload-urls-demo.html](./preload-urls-demo.html)
