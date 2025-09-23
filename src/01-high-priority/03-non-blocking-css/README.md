# Non-Blocking CSS

> CSS files need to be non-blocking to prevent the DOM from taking time to load.

CSS files can block the page load and delay the rendering of your page. Using `preload` can actually load the CSS files before the browser starts showing the content of the page.

You need to add the `rel` attribute with the preload value and add `as="style"` on the `<link>` element.

## Reference

- [MDN: rel="preload" attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload)