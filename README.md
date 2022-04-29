# num-is-even-or-odd [![NPM version](https://img.shields.io/npm/v/num-is-even-or-odd.svg?style=flat)](https://www.npmjs.com/package/num-is-even-or-odd) [![NPM monthly downloads](https://img.shields.io/npm/dm/num-is-even-or-odd.svg?style=flat)](https://npmjs.org/package/num-is-even-or-odd) [![NPM total downloads](https://img.shields.io/npm/dt/num-is-even-or-odd.svg?style=flat)](https://npmjs.org/package/num-is-even-or-odd)

> Return even or odd to as result to a given number.


## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save num-is-even-or-odd
```

## Usage

Works with strings or numbers.

You can pass an 'str' or 'bool' parameter to return the result in string or boolean, by defualt the function will return in string format.

```js
const evenOrOdd = require('num-is-even-or-odd');

// Whitout any return type parameter

console.log(evenOrOdd(1)); //=> "odd"
console.log(evenOrOdd(2)); //=> "even"

console.log(evenOrOdd('1')); //=> "odd"
console.log(evenOrOdd('2')); //=> "even"

// With 'str' parameter

console.log(evenOrOdd(1, 'str')); //=> "odd"
console.log(evenOrOdd(2, 'str')); //=> "even"

console.log(evenOrOdd('1', 'str')); //=> "odd"
console.log(evenOrOdd('2', 'str')); //=> "even"

// With 'bool' parameter

console.log(evenOrOdd(1, 'bool')); //=> 1
console.log(evenOrOdd(2, 'bool')); //=> 0

console.log(evenOrOdd('1', 'bool')); //=> 1
console.log(evenOrOdd('2', 'bool')); //=> 0
```

### Author

**Otavio Rampinelli**

* [LinkedIn Profile](https://linkedin.com/in/otarampinelli)
* [GitHub Profile](https://github.com/otarampinelli)
* [Twitter Profile](https://twitter.com/otarampinelli)

### License

Copyright © 2022, [Otavio Rampinelli](https://github.com/otarampinelli).
Released under the [MIT License](LICENSE).

***
