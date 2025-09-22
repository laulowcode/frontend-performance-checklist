# Minified CSS - Remove Comments, Whitespaces etc

When CSS files are minified, the content is loaded faster and less data is sent to the client. It’s important to always minify CSS files in production. It is beneficial for the user as it is for any business who wants to lower bandwidth costs and lower resource usage.

Use tools to minify your files automatically before or during your build or your deployment.

---

## What Gets Removed During Minification?

1. **Comments**: `/* This is a comment */`
2. **Whitespace**: Spaces, tabs, and line breaks
3. **Empty rules**: Rules with no declarations
4. **Redundant semicolons**: Last semicolon in a rule block
5. **Unnecessary quotes**: Around font names and URLs when possible

---

## Advanced Optimizations

Modern minifiers also perform:

1. **Property merging**: 
   ```css
   /* Before */
   margin-top: 10px;
   margin-right: 15px;
   margin-bottom: 10px;
   margin-left: 15px;
   
   /* After */
   margin: 10px 15px;
   ```

2. **Color optimization**:
   ```css
   /* Before */
   color: #ffffff;
   background: rgb(255, 255, 255);
   
   /* After */
   color: #fff;
   background: #fff;
   ```

3. **Unit optimization**:
   ```css
   /* Before */
   padding: 0px;
   margin: 0.0em;
   
   /* After */
   padding: 0;
   margin: 0;
   ```

---

## Popular CSS Minification Tools

### Build Tools & Plugins

1. **[cssnano](https://cssnano.co/)**

2. **[clean-css](https://github.com/clean-css/clean-css)**

3. **Webpack with css-minimizer-webpack-plugin**:

4. **Vite** (built-in minification)

5. **[CSS Minifier](https://cssminifier.com/)**

6. **[CSS Compressor](https://csscompressor.com/)**

7. **[Minify CSS](https://www.minifier.org/)**