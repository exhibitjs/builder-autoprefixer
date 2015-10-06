# exhibit-builder-autoprefixer

> [Exhibit.js](https://github.com/exhibitjs/exhibit) builder plugin for transforming CSS files with [Autoprefixer](https://github.com/postcss/autoprefixer).

[![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]


## Installation

```sh
$ npm install --save-dev exhibit-builder-autoprefixer
```


## Usage

```js
exhibit('src')
  .use('autoprefixer')
  .build('dist');
```


## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-autoprefixer
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-autoprefixer.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/exhibit-builder-autoprefixer
[travis-image]: https://img.shields.io/travis/exhibitjs/exhibit-builder-autoprefixer.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/exhibit-builder-autoprefixer
[depstat-image]: https://img.shields.io/david/exhibitjs/exhibit-builder-autoprefixer.svg?style=flat-square
