# henning
Server-level [thurston](https://github.com/ruiquelhas/thurston) validation for [hapi](https://github.com/hapijs/hapi).

[![NPM Version][version-img]][version-url] [![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![Dependencies][david-img]][david-url] [![Dev Dependencies][david-dev-img]][david-dev-url]

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Example](#example)
- [Supported File Types](#supported-file-types)

## Installation
Install via [NPM](https://www.npmjs.org).

```sh
$ npm install henning
```

## Usage
Register the package as a server plugin to enable validation for each route that parses — `parse: true` — and creates a `Readable` stream for each file in the request payload — `output: 'stream'`. For every other route with a different configuration, the validation is skipped.

If the validation fails, a [joi](https://github.com/hapijs/joi)-like `400 Bad Request` error is returned alongside an additional `content-validation: failure` response header. If everything is ok, the response will ultimately contain a `content-validation: success` header.

### Example

```js
const Hapi = require('hapi');
const Henning = require('henning');

try {
    const server = new Hapi.Server();

    server.route({
        options: {
            payload: {
                output: 'stream',
                parse: true
            }
            // go nuts
        }
    });

    await server.register({
        register: Henning,
        options: {
            // Allow png files only
            whitelist: ['image/png']
        }
    });

    await server.start();
}
catch (err) {
    throw err;
}
```

## Supported File Types
The same as [file-type](https://github.com/sindresorhus/file-type/tree/v7.0.0#supported-file-types).

[coveralls-img]: https://img.shields.io/coveralls/ruiquelhas/henning.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/ruiquelhas/henning
[david-img]: https://img.shields.io/david/ruiquelhas/henning.svg?style=flat-square
[david-url]: https://david-dm.org/ruiquelhas/henning
[david-dev-img]: https://img.shields.io/david/dev/ruiquelhas/henning.svg?style=flat-square
[david-dev-url]: https://david-dm.org/ruiquelhas/henning?type=dev
[version-img]: https://img.shields.io/npm/v/henning.svg?style=flat-square
[version-url]: https://www.npmjs.com/package/henning
[travis-img]: https://img.shields.io/travis/ruiquelhas/henning.svg?style=flat-square
[travis-url]: https://travis-ci.org/ruiquelhas/henning
