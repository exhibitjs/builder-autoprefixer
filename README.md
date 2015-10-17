> # autoprefixer
>
> **Exhibit.js builder plugin**
>
> Adds vendor prefixes to CSS files with [Autoprefixer](https://github.com/postcss/autoprefixer).
>
> ```sh
> $ npm install -D exhibit-builder-autoprefixer
> ```
>
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url] [![peerDependency Status][peerdepstat-image]][peerdepstat-url]


## Usage

Can be configured with an options object:

```js
  .use('autoprefixer', {
    browsers: ['> 1%', 'IE 7'],
    cascade: false
  })
```

...or just the `browsers` option alone:

```js
exhibit()
  .use('autoprefixer', ['> 1%', 'IE 7'])
  .build('app', 'dist');
```


## Options

You may set any of the usual [Autoprefixer options](https://github.com/postcss/autoprefixer#options).

#### Additional options

> **`include`** (string/array/function) — default: `**/*.css`

Which files to process. Follows Exhibit’s [glob convention](https://github.com/exhibitjs/exhibit/blob/master/docs/glob-convention.md).


---

## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-autoprefixer
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-autoprefixer.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/builder-autoprefixer
[travis-image]: https://img.shields.io/travis/exhibitjs/builder-autoprefixer.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/builder-autoprefixer
[depstat-image]: https://img.shields.io/david/exhibitjs/builder-autoprefixer.svg?style=flat-square

[devdepstat-url]: https://david-dm.org/exhibitjs/builder-autoprefixer#info=devDependencies
[devdepstat-image]: https://img.shields.io/david/dev/exhibitjs/builder-autoprefixer.svg?style=flat-square&label=devDeps

[peerdepstat-url]: https://david-dm.org/exhibitjs/builder-autoprefixer#info=peerDependencies
[peerdepstat-image]: https://img.shields.io/david/peer/exhibitjs/builder-autoprefixer.svg?style=flat-square&label=peerDeps
