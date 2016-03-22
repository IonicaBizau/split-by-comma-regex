# split-by-comma-regex [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/split-by-comma-regex.svg)](https://www.npmjs.com/package/split-by-comma-regex) [![Downloads](https://img.shields.io/npm/dt/split-by-comma-regex.svg)](https://www.npmjs.com/package/split-by-comma-regex) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Regular expression for splitting strings by comma.

## Installation

```sh
$ npm i --save split-by-comma-regex
```

## Example

```js
const splitByCommaRegex = require("split-by-comma-regex");

console.log(splitByCommaRegex());
// => /[ ,]+/gm

console.log("1, 2,3   ,   4,   5    ,6".split(splitByCommaRegex()));
// => [ '1', '2', '3', '4', '5', '6' ]
```

## Documentation

### `splitByCommaRegex()`
Regular expression for splitting strings by comma.

#### Return
- **RegExp** The regular expression.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md