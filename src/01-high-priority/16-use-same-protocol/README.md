# Use same Protocol

Avoid having your website serving files coming from source using HTTP on your website which is using HTTPS for example. If your website is using HTTPS, external files should come from the same protocol.

## Mixed Content Example

Let's say your website, `https://www.my-awesome-shop.com`, is secure and uses HTTPS. On your homepage, you want to include a popular JavaScript library from a Content Delivery Network (CDN) and an image from a partner's site.

### Bad Practice (Mixed Protocols)

Here, the HTML explicitly calls the script and the image using the `http://` protocol.

**HTML**

```
<!DOCTYPE html>
<html>
<head>
  <title>My Awesome Shop</title>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>
<body>
  <h1>Welcome to our Shop!</h1>
  <img src="http://partner-cdn.com/logo.png" alt="Partner Logo">
</body>
</html>
```

**What happens?**

* A browser visiting `https://www.my-awesome-shop.com` will see these `http://` requests.
* It will flag this as  **mixed content** .
* Most likely, it will **block** both `jquery.min.js` and `logo.png` from loading.
* **Result:** Your site's JavaScript-dependent features will fail, the partner logo will be missing, and users might see a security warning in their address bar.
