# Inline the Critical CSS (above the fold CSS)

> The CSS critical (or “above the fold”) collects all the CSS used to render the visible portion of the page. It is embedded before your principal CSS call and between <style></style> in a single line (minified if possible).

Inlining critical CSS help to speed up the rendering of the web pages reducing the number of requests to the server.

![Critical CSS Example](https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/79f81b05-cb5e-40f3-ab1a-c07f650533b9/02-browser-opt.jpg)

## How to Extract and Inline Critical CSS

You can use the [`critical`](https://github.com/addyosmani/critical) npm package to automate the extraction and inlining of critical CSS for your web pages.
