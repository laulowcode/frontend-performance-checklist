# Frontend Performance Checklist

A comprehensive guide to frontend performance best practices organized by priority level. Follow this checklist to optimize your web application's performance and deliver a better user experience.

Following: https://roadmap.sh/best-practices/frontend-performance

## Table of Contents

- [High Priority](#high-priority)
- [Medium Priority](#medium-priority)
- [Low Priority](#low-priority)
- [Performance Tools](#performance-tools)

---

## High Priority

- [ ] Minimize number of iframes
- [ ] Minified CSS - Remove comments, whitespaces etc
- [ ] CSS files are non-blocking
- [ ] Inline the Critical CSS (above the fold CSS)
- [ ] Avoid the embedded / inline CSS
- [ ] Analyse stylesheets complexity
- [ ] Compress your images / keep the image count low
- [ ] Choose your image format appropriately
- [ ] Minify your JavaScript
- [ ] Non Blocking JavaScript: Use async / defer
- [ ] Use HTTPs on your website
- [ ] Keep your page weight < 1500 KB (ideally < 500 kb)
- [ ] Keep your page load time < 3 seconds
- [ ] Keep the Time To First Byte < 1.3 seconds
- [ ] Minimize HTTP Requests
- [ ] Serve files from the same protocol
- [ ] Avoid requesting unreachable files (404)
- [ ] Set HTTP cache headers properly
- [ ] GZIP / Brotli compression is enabled

---

## Medium Priority

- [ ] Minified HTML - Remove comments and whitespaces
- [ ] Use Content Delivery Network
- [ ] Prefer using vector image rather than bitmap images
- [ ] Set width and height attributes on images (aspect ratio)
- [ ] Avoid using Base64 images
- [ ] Offscreen images are loaded lazily
- [ ] Ensure to serve images that are close to your display size
- [ ] Avoid multiple inline JavaScript snippets `<script>`
- [ ] Keep your dependencies up to date
- [ ] Check for performance problems in your JavaScript files
- [ ] Service Workers for caching / performing heavy tasks
- [ ] Cookie size should be less than 4096 bytes
- [ ] Keep the cookie count less than 20

---

## Low Priority

- [ ] Pre-load URLs where possible
- [ ] Concatenate CSS into a single file
- [ ] Remove unused CSS
- [ ] Use WOFF2 font format
- [ ] Use preconnect to load your fonts faster
- [ ] Keep the web font size under 300kb
- [ ] Prevent Flash of Invisible Text (FOIT/FOUT)
- [ ] Keep an eye on the size of dependencies

---

## Performance Tools

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- [WebPageTest](https://www.webpagetest.org/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Bundlephobia](https://bundlephobia.com/)
- [Squoosh.app](https://squoosh.app/)
