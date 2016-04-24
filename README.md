# packweb

Simplest possible use of webpack
```
node_modules/.bin/webpack app/main.js public/bundle.js
```
`main.js` is the `entry` point, `bundle.js` is the `output`

Loaders vs Plugins
- `loaders` deal with each source file, one at a time, as _loaded_
- `plugins` influence the build process as a whole instead of individual source files
