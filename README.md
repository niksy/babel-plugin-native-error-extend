# babel-plugin-native-error-extend

[![Build Status][ci-img]][ci]

Babel plugin for native `Error` extending.

Handles all ususal cases such as classic extend and `constructor` override.

## Install

```sh
npm install babel-plugin-native-error-extend --save
```

## Usage

Use it via available [plugin activation options][babel-plugins].

For `.babelrc` file:

```json
{
	"plugins": ["babel-plugin-native-error-extend"]
}
```

Then, in your code:

```js
/* Before */

class Becky extends Error {}

/* After */

class Becky extends Error {
	constructor(message, options) {
		super(message, options);
		this.name = this.constructor.name;
		this.message = message;

		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = new Error(message).stack;
		}
	}
}
```

Check test fixtures ([actual](test/fixtures/classes.js) and
[expected](test/fixtures/classes.expected.js)) for more examples.

## Acknowledgments

-   [`extendable-error-class`](https://github.com/brillout/extendable-error-class)
-   [`custom-error-class`](https://github.com/mafintosh/custom-error-class)
-   [`extensible-error`](https://github.com/justmoon/extensible-error)
-   [`es6-error`](https://github.com/bjyoungblood/es6-error)

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://travis-ci.com/niksy/babel-plugin-native-error-extend
[ci-img]: https://travis-ci.com/niksy/babel-plugin-native-error-extend.svg?branch=master
[babel-plugins]: http://babeljs.io/docs/plugins/

<!-- prettier-ignore-end -->
