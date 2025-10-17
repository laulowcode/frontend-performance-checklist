# Frontend Performance Checklist

A comprehensive guide to frontend performance best practices organized by priority level. Follow this checklist to optimize your web application's performance and deliver a better user experience.

Following: https://roadmap.sh/best-practices/frontend-performance

## Table of Contents

- [Demos](#demos)
- [High Priority](#high-priority)
- [Medium Priority](#medium-priority)
- [Low Priority](#low-priority)
- [Performance Tools](#performance-tools)

## Demos

Each checklist item may have a demo inside its folder. For example:

- [`01-high-priority/01-minimize-iframes/iframe-blocking-demo.html`](./src/01-high-priority/01-minimize-iframes/iframe-blocking-demo.html): Demonstrates how iframes can block the page's `onload` event and delay critical scripts.
- [`01-high-priority/02-minified-css/css-minification-demo.html`](./src/01-high-priority/02-minified-css/css-minification-demo.html): Interactive demo showing the performance impact of CSS minification with real-world examples and tools.

Explore the respective folders for more hands-on examples illustrating the performance impact and solutions for each topic.

---

## High Priority

- [X] Minimize number of iframes
- [X] Minified CSS - Remove comments, whitespaces etc
- [X] CSS files are non-blocking
- [X] Inline the Critical CSS (above the fold CSS)
- [X] Avoid the embedded / inline CSS
- [X] Analyse stylesheets complexity
- [X] Compress your images / keep the image count low
- [X] Choose your image format appropriately
- [X] Minify your JavaScript
- [X] Non Blocking JavaScript: Use async / defer
- [X] Use HTTPs on your website
- [X] Keep your page weight < 1500 KB (ideally < 500 kb)
- [X] Keep your page load time < 3 seconds
- [X] Keep the Time To First Byte < 1.3 seconds
- [X] Minimize HTTP Requests
- [X] Serve files from the same protocol
- [X] Avoid requesting unreachable files (404)
- [X] Set HTTP cache headers properly
- [X] GZIP / Brotli compression is enabled

---

## Medium Priority

- [X] Minified HTML - Remove comments and whitespaces
- [X] Use Content Delivery Network
- [X] Prefer using vector image rather than bitmap images
- [X] Set width and height attributes on images (aspect ratio)
- [X] Avoid using Base64 images
- [X] Offscreen images are loaded lazily
- [X] Ensure to serve images that are close to your display size
- [X] Avoid multiple inline JavaScript snippets `<script>`
- [X] Keep your dependencies up to date
- [X] Check for performance problems in your JavaScript files
- [X] Service Workers for caching / performing heavy tasks
- [X] Cookie size should be less than 4096 bytes
- [X] Keep the cookie count less than 20

---

## Low Priority

- [X] Pre-load URLs where possible
- [X] Concatenate CSS into a single file
- [X] Remove unused CSS
- [X] Use WOFF2 font format
- [X] Use preconnect to load your fonts faster
- [X] Keep the web font size under 300kb
- [X] Prevent Flash of Invisible Text (FOIT/FOUT)
- [X] Keep an eye on the size of dependencies

---

## Performance Tools

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- [WebPageTest](https://www.webpagetest.org/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Bundlephobia](https://bundlephobia.com/)
- [Squoosh.app](https://squoosh.app/)
