# Avoid iframes

Use iframes only if you don’t have any other technical possibility. Try to avoid iframes as much as you can. Iframes are not only bad for performance, but also for accessibility and usability. Iframes are also not indexed by search engines.

---

### Why iframes are bad for performance?

Iframes (_inline frames_) essentially embed an entirely separate HTML document within a parent page. This creates several performance bottlenecks:

- **Blocking the _onload_ event**: The parent page's onload event (which often triggers other scripts) won't fire until all the content inside the iframes has completely finished loading. A single slow-loading third-party iframe can grind your entire page's perceived load to a halt.

- **Increased memory and CPU usage**: Each iframe consumes its own memory and CPU resources, just like a separate browser tab. Having multiple iframes can quickly add up, making the page feel sluggish, especially on mobile devices.

- **Additional HTTP requests**: The browser must make a separate request for the iframe's HTML document, and then additional requests for all of its assets (CSS, JavaScript, images). This significantly increases the total number of requests and data needed to render the page.

---

### Why iframes are bad for accessibility (a11y) and usability (UX)

From a user's perspective, iframes can be confusing and frustrating:

#### Accessibility

- **Screen reader confusion**: Screen readers may struggle to understand the relationship between the parent page and the iframe content. It can be disorienting for a user when the "focus" suddenly jumps into a separate document without clear context.

- **Keyboard navigation**: Tabbing through links and form fields can become unpredictable. The tab order might jump into the iframe, trapping the user, or skip it entirely.

#### Usability

- **Confusing navigation**: The "Back" button might not work as expected. A user might navigate within the iframe, and pressing "Back" might take them to the previous page within the iframe instead of the previous page they were on before visiting your site.

- **Awkward scrolling**: Iframes often create their own scrollbars within the main page's scrollbar. This "double scrollbar" problem is visually jarring and difficult to use, especially on touch devices.

- **Broken linking**: Users may try to bookmark or share a link to your page, but the URL in the address bar won't reflect the specific content they are viewing inside the iframe.

---

### Why search engines don't index iframe content

Search engines like Google index and rank pages based on the content that is directly present in the HTML of a given URL. When a crawler encounters an `<iframe>`, it recognizes that the content inside the iframe comes from a different source (the URL in the `src` attribute) and is not part of the parent page's main content.

As a result:

- **Content isolation**: The text, images, and other elements inside the iframe are not considered part of the parent page. Search engines do not "merge" the iframe's content with the parent page for indexing or ranking purposes.
- **No SEO benefit**: Any valuable content inside an iframe (such as articles, product descriptions, or keywords) does not help the parent page's SEO. That content is only associated with the iframe's source URL, not the page embedding it.
- **Missed context**: Even if the iframe's source is crawlable, search engines may not understand the relationship between the parent page and the iframe content, leading to missed opportunities for contextual ranking.

**In summary:** If you rely on iframes to display important content, that content will not help your page's search engine visibility. Always place critical, indexable content directly in your page's HTML whenever possible.
