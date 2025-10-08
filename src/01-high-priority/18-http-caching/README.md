# HTTP Caching
Set HTTP headers to avoid expensive number of roundtrips between your browser and the server.

### Core Concepts

* **Caching's Purpose**: The primary goal of HTTP caching is to **store responses** closer to the user (e.g., in the browser) to make subsequent requests faster and reduce the load on the origin server.
* **Cache Types**: There are two main types of caches.
    * **Private Cache**: Tied to a single client, like a browser's cache. It's safe to store user-specific, personalized content here. Use the `Cache-Control: private` directive for this.
    * **Shared Cache**: Sits between clients and the server (e.g., a CDN or proxy) and stores responses that can be reused by multiple users.
* **Fresh vs. Stale**: A cached response is either **fresh** (valid to use) or **stale** (expired). This is determined by its `age` and directives like `Cache-Control: max-age`.
* **Validation**: Stale responses aren't useless. A client can "validate" its cached copy with the server using a **conditional request**. If the content hasn't changed, the server sends back a tiny `304 Not Modified` response, saving bandwidth and time. This is done using the `ETag` (preferred) or `Last-Modified` headers.

---

### Critical `Cache-Control` Directives

The `Cache-Control` header is the modern and most important tool for controlling cache behavior.

* `max-age=<seconds>`: Tells caches how long a response is considered **fresh**. This is the preferred way to set an expiration time, superseding the older `Expires` header.
* `no-cache`: This is one of the most misunderstood directives. It **does not mean "do not store."** It means the response *can* be stored, but it **must be validated** with the origin server every time before being used.
* `no-store`: This directive is the one that actually means **"do not store."** Use this for highly sensitive information. However, the article advises against using it liberally as it can break browser features like the back/forward cache.
* `private`: Restricts the response to being stored only in a **private cache** (the user's browser), not in a shared cache like a CDN.
* `immutable`: Tells the browser that the response body will **never change**. This prevents the browser from sending validation requests for this asset, even when the user hits "reload."



---

### Common Caching Patterns (Best Practices)

You can cover most use cases by combining two main strategies:

#### For Immutable Assets (CSS, JS, Images)
These are files whose content never changes without the URL also changing.

1.  **Use Cache Busting**: Add a version number or a content hash to the filename (e.g., `style.a3f4c1.css` or `bundle.v3.js`).
2.  **Set a Long `max-age`**: Since the file URL will change when the content does, you can safely tell browsers to cache it for a very long time (e.g., one year).
3.  **Add `immutable`**: To prevent unnecessary validation checks during page reloads.

**Example Header:** `Cache-Control: public, max-age=31536000, immutable`

#### For Main Resources (HTML Documents)
These are files whose URLs often cannot change (e.g., your homepage).

1.  **Use `no-cache`**: This forces the browser to always check with the server to see if a new version is available.
2.  **Provide `ETag` and `Last-Modified` Headers**: This allows the server to efficiently respond with `304 Not Modified` if the content is unchanged, letting the browser use its cached version.
3.  **Add `private` for Personalized Content**: If the HTML is customized for a logged-in user, add the `private` directive to prevent it from being stored in shared caches.

**Example Header:** `Cache-Control: no-cache, private`
