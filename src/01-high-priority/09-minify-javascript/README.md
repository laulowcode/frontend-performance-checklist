# **Minify JavaScript**

> *All JavaScript files are minified, comments, white spaces and new lines are removed from production files (still valid if using HTTP/2).*
> 

Removing all unnecessary spaces, comments and break will reduce the size of your JavaScript files and speed up your site's page load times and obviously lighten the download for your user.

Use the tools suggested below to minify your files automatically before or during your build or your deployment.

## Example Files

- `example.js` - Original JavaScript file (609 bytes, 30 lines)
- `example.min.js` - Minified version (304 bytes, 1 line, 50% smaller)

## Running the Example

```bash
# Install dependencies
npm install

# Minify the example file
npx terser src/01-high-priority/09-minify-javascript/example.js -c -m -o src/01-high-priority/09-minify-javascript/example.min.js

```

## What Gets Minified

- **Comments removed**: All `//` and `/* */` comments deleted
- **Whitespace removed**: Spaces, tabs, and line breaks eliminated  
- **Variable names shortened**: `items` → `t`, `total` → `r`
- **Code optimized**: Unnecessary code eliminated