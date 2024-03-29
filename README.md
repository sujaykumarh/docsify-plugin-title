# Docsify Plugin Title

> [!NOTE]
> v1.2.0 fixed typo [#40](https://github.com/sujaykumarh/docsify-plugin-title/issues/40) `seprator` in v1.x to `separator` as a breaking change was released earlier under v1.2.0 on 06-09-2023 and has since been unpublished as on 11-09-2023.
> Please upgrade to v2.x for typo fix

A simple plugin to customize [docsify](https://github.com/docsifyjs/docsify/) page title

<!--[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/sujaykumarh/docsify-plugin-title/Build%20&%20Publish%20package)](https://github.com/Sujaykumarh/docsify-plugin-title/actions)-->
[![GitHub package.json version](https://img.shields.io/github/package-json/v/sujaykumarh/docsify-plugin-title)](https://www.npmjs.com/package/@sujaykumarh/docsify-plugin-title)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/@sujaykumarh/docsify-plugin-title)](https://www.jsdelivr.com/package/npm/@sujaykumarh/docsify-plugin-title)
<br>

# 📥 Download

- Locally

    ```bash
    npm install @sujaykumarh/docsify-plugin-title
    ```
- CDN

    ```html
    <script src="//cdn.jsdelivr.net/npm/@sujaykumarh/docsify-plugin-title@2.x/dist/plugin.min.js"></script>
    ```

<br>

# 🧰 Configuration

Available options

```js
window.$docsify.customPageTitle = {
    prefix:     false,      // [optional] title prefix. default: false eg: prefix: "Application"
    suffix:     false,      // [optional] title suffix. default: false eg: suffix: "v1.0.0"
    separator:   '|',       // [optional] separator for title eg: title->   prefix | title | suffix
    debug:      false,      // [optional] should debug
}
```

Example:

```html
<script>
    ...

    window.$docsify.customPageTitle = {
        prefix:     'Docsify',     // title prefix.
        suffix:     'v1.0.0',      // title suffix.
    }

    ...
</script>
```

<br>

# 🛠️ Development

Clone

```bash
git clone https://github.com/sujaykumarh/docsify-plugin-title.git
```

install resources

```bash
npm install
```

minify `src/plugin.js` to generate minified files in `dist` folder

```bash
npm run minify  # generate minified .min.js in dist
```

<br>

# 📄 License

Copyright (c) 2021  [Sujay H](https://github.com/sujaykumarh) Licensed under `Apache License v2.0` read [LICENSE](./LICENSE)
