##### exhibit.js builder

# autoprefixer

> Adds vendor prefixes to CSS with [Autoprefixer](https://github.com/postcss/autoprefixer).

[![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]


## Installation

```sh
$ npm install --save-dev exhibit-builder-autoprefixer
```


## Usage

Can be called with an options object:

```js
  .use('autoprefixer', options)
```

Or just the `browsers` option if you're happy with the other defaults:

```js
exhibit()
  .use('autoprefixer', ['> 1%', 'IE 7'])
  .build('app', 'dist');
```


## Options

In addition to the usual [Autoprefixer options](https://github.com/postcss/autoprefixer#options) (including `browsers`), there is one extra option.

##### `include` 

Default: `**/*.css`

Which files should be processed by this extension. (All other files will be passed through unmodified.)


## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-autoprefixer
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-autoprefixer.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/exhibit-builder-autoprefixer
[travis-image]: https://img.shields.io/travis/exhibitjs/exhibit-builder-autoprefixer.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/exhibit-builder-autoprefixer
[depstat-image]: https://img.shields.io/david/exhibitjs/exhibit-builder-autoprefixer.svg?style=flat-square
