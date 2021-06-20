# Docsify Plugin Title

A simple plugin to set custom docsify title

<br>

# 📥 Download

- Locally

    ```bash
    npm install @sujaykumarh/docsify-plugin-title
    ```
- CDN

    ```html
    <script src="https://cdn/url/plugin.js"></script>
    ```

<br>

# 🧰 Configuration

Available options

```js
window.$docsify.customPageTitle = {
    prefix:     false,      // [optional] title prefix. defalt: false eg: prefix: "Application"
    suffix:     false,      // [optional] title suffix. defalt: false eg: suffix: "v1.0.0"
    seprator:   '|',        // [optional] seprator for title eg: title->   prefix | title | suffix
	debug:		false,      // [optional] should debug
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
git clone https://github.com/Sujaykumarh/docsify-docker-example.git
```

install resources

```bash
npm install
```

Generate files in `dist` folder
```bash
npm run all     # generate all

npm run dist    # generate just .js in dist

npm run minify  # generate minified .min.js in dist
```

<br>

# 📄 License

```
Copyright (c) 2021 Sujaykumar.Hublikar <hello@sujaykumarh.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```